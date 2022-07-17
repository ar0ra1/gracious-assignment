import React, { Suspense, useCallback, useMemo, useState } from "react";
import useSWR from "swr";
import { BASE_QUERY } from "../lib/useGraphQLRequest";
import { Characters } from "./Characters";
// import { RandomQuote } from "./RandomQuote";
import { Select } from "./Select";
import { TransitionState } from "./TransitionState";

export const Wrapper = () => {
  const { data, error } = useSWR(BASE_QUERY);

  const locations = data.locations.results;
  const episodes = data.episodes.results;

  const dimensions = useMemo(() => {
    const allDimensions = Array.from(
      new Set(locations.map((e) => e.dimension))
    );
    let dim = [];
    for (let i = 0; i < allDimensions.length; ++i) {
      dim.push({ id: allDimensions[i], name: allDimensions[i] });
    }
    return dim;
  }, [locations]);

  const [selectedFilter, setSelectedFilter] = useState({});

  const handleLocationChange = useCallback((e) => {
    setSelectedFilter({ type: "Location", value: e.target.value });
  }, []);

  const handleEpisodeChange = useCallback((e) => {
    setSelectedFilter({ type: "Episode", value: e.target.value });
  }, []);

  const handleDimensionChange = useCallback((e) => {
    setSelectedFilter({ type: "Dimension", value: e.target.value });
  }, []);

  return (
    <div className="flex flex-col gap-5 p-10 mb-10 md:flex-row">
      {error ? (
        <TransitionState type="error" />
      ) : (
        <>
          <div className="flex flex-col w-full max-w-md gap-10 px-5 py-10 rounded-md shadow-lg text-rmDark h-fit bg-rmLight">
            <h3 className="text-xl">Filters</h3>
            <div className="flex flex-col">
              <label>Location </label>
              <Select
                handleChange={handleLocationChange}
                selectedValue={
                  selectedFilter.type === "Location" ? selectedFilter.value : ""
                }
                data={locations}
              />
            </div>
            <div className="flex flex-col">
              <label>Episode </label>
              <Select
                handleChange={handleEpisodeChange}
                selectedValue={
                  selectedFilter.type === "Episode" ? selectedFilter.value : ""
                }
                data={episodes}
              />
            </div>
            <div className="flex flex-col">
              <label>Dimensions </label>
              <Select
                handleChange={handleDimensionChange}
                selectedValue={
                  selectedFilter.type === "Dimension"
                    ? selectedFilter.value
                    : ""
                }
                data={dimensions}
              />
            </div>
            {/* <RandomQuote /> */}
          </div>
          <Suspense fallback={<TransitionState type="loading" />}>
            <Characters filter={selectedFilter} />
          </Suspense>
        </>
      )}
    </div>
  );
};
