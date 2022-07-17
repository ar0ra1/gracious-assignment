import Image from "next/image";
import React, { memo } from "react";

const CharacterComponent = ({ character }) => {
  return (
    <div className="self-stretch max-w-md overflow-hidden rounded shadow-lg bg-rmLight">
      <div className="relative flex w-full md:h-96 h-60">
        <Image
          alt={character.name}
          src={character.image}
          objectFit="fill"
          layout="fill"
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-rmRed">
          {character.name}
        </div>
        <p className="text-base">
          <strong>Origin :</strong> {character.origin.name} in{" "}
          {character.origin.dimension || "unkown dimension"}
        </p>
        <p className="text-base">
          <strong>Last Location : </strong>
          {character.location.name} in dimension {character.location.dimension}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-rmLight bg-rmRed">
          Status : {character.status}
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-rmLight bg-rmRed">
          Type : {character.type || "unkown"}
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-rmLight bg-rmRed">
          Gender: {character.gender}
        </span>
      </div>
    </div>
  );
};

export const Character = memo(CharacterComponent);
