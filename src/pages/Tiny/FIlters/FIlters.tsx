import { FC, useState } from "react";

type tFIltersProps = {
  [key: string]: any;
};

export const FIlters: FC<tFIltersProps> = () => {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  return (
    <div className="FIlters">
      FIlters
      <input
        value={val}
        onChange={(e) => {
          let { value } = e.target;
          // let val = value.replace(/[^(0-9).]/g, "").slice(0, 5);
          value = value.replace(/\D/g, "");
          value = value.replace(/(\d)(\d{1,2})$/g, "$1.$2");
          value = value.replace(/(?=(\d{3})+(\D))\B/g, ",");
          setVal(value);
        }}
      />
      <input
        value={val2}
        onChange={(e) => {
          let { value } = e.target;
          value = value.replace(/\D/g, "");
          value = value.replace(/(\d)(\d{1,2})$/g, "$1.$2");
          setVal2(value.slice(-5));
        }}
      />
    </div>
  );
};
