import React from "react";

export const Select = ({ data, selectedValue, handleChange }) => {
  return (
    <select
      onChange={handleChange}
      value={selectedValue || -1}
      className="px-4 py-2 border-b-2 rounded-md outline-none text-rmDark border-b-rmRed bg-rmLight"
    >
      {[{ disabled: true, name: "Select here", id: -1 }, ...data].map((d) => (
        <option disabled={d.disabled || false} value={d.id} key={d.id}>
          {d.name}
        </option>
      ))}
    </select>
  );
};
