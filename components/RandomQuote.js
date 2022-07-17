import React, { memo } from "react";
import useRequest from "../lib/useAxiosRequest";
import { TransitionState } from "./TransitionState";

const RandomQuoteWrapper = () => {
  const { data, error, mutate } = useRequest(
    "http://loremricksum.com/api/?paragraphs=1&quotes=1"
  );

  if (error) {
    return <TransitionState type="error" />;
  }

  return (
    <p onClick={() => mutate()} className="cursor-pointer">
      <span className="text-rmRed">Random Quote:</span> {data && data.data}
    </p>
  );
};

export const RandomQuote = memo(RandomQuoteWrapper);
