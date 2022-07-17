import Image from "next/image";
import React, { memo } from "react";

const TransitionStateComponent = ({ type }) => {
  const image = () => {
    switch (type) {
      case "loading":
        return "/loading.png";
      case "empty":
        return "/empty.png";
      case "error":
        return "/error.png";
    }
  };

  return (
    <div className="flex items-center justify-center flex-1 w-100">
      <Image
        src={image()}
        alt={type}
        height={300}
        width={450}
        objectFit={"fill"}
      />
    </div>
  );
};

export const TransitionState = memo(TransitionStateComponent);
