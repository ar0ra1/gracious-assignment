import React, { useCallback, useMemo } from "react";
import useSWR from "swr";
import {
  fetcher,
  CHARACTERS_FROM_LOCATION_FILTER,
  CHARACTERS_FROM_EPISODE_FILTER,
  CHARACTERS_FROM_DIMENSION_FILTER,
} from "../lib/useGraphQLRequest";
import { Character } from "./Character";
import { TransitionState } from "./TransitionState";

export const Characters = ({ filter }) => {
  const getQueryAndPath = useCallback(() => {
    switch (filter.type) {
      case "Location":
        return {
          query: CHARACTERS_FROM_LOCATION_FILTER(filter.value),
          path: "location.residents",
        };
      case "Episode":
        return {
          query: CHARACTERS_FROM_EPISODE_FILTER(filter.value),
          path: "episode.characters",
        };
      case "Dimension":
        return {
          query: CHARACTERS_FROM_DIMENSION_FILTER(filter.value),
          path: "locations.results",
        };
      default:
        return { query: null, path: null };
    }
  }, [filter]);

  const { query, path } = getQueryAndPath();

  const { data, error } = useSWR(query, fetcher, { suspense: true });

  const stringToObjPath = useCallback(
    (obj) => path.split(".").reduce((acc, curr) => acc && acc[curr], obj),
    [path]
  );

  const charactersToDisplay = useMemo(() => {
    if (path && data) {
      return filter.type === "Dimension"
        ? stringToObjPath(data).flatMap((d) =>
            d.residents.length > 0 ? [...d.residents] : []
          )
        : stringToObjPath(data);
    } else {
      return [];
    }
  }, [path, data, stringToObjPath, filter]);

  return (
    <>
      {error ? (
        <TransitionState type={"error"} />
      ) : charactersToDisplay.length === 0 && path ? (
        <TransitionState type={"empty"} />
      ) : (
        <div className="grid grid-rows-1 gap-4 md:grid-cols-3 ">
          {charactersToDisplay.map((e) => (
            <Character character={e} key={e.id} />
          ))}
        </div>
      )}
    </>
  );
};
