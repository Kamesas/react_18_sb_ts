import React, { FC, useRef } from "react";

interface iSelectRefProps {
  [key: string]: any;
}

export const SelectRef: FC<iSelectRefProps> = () => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const option = [
    { id: 1, label: "one" },
    { id: 2, label: "two" },
    { id: 3, label: "three" },
  ];

  console.log("selectRef", selectRef);
  return (
    <select ref={selectRef} onChange={(e) => console.log("ee", e.target)}>
      {option.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};
