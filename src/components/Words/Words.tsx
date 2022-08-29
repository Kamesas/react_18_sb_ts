import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { top_3000 } from "./words_3000";
import { sevenStr } from "./sevetHabits";

interface iWordsProps {
  [key: string]: any;
}

export const Words: FC<iWordsProps> = () => {
  const filtered = sevenStr.replace(/(\b\w{1,3}\b)|[@©,]/gim, "");
  const arrSevenHabits = filtered.split(" ");
  const uniqueWords = arrSevenHabits.filter((x, i, a) => a.indexOf(x) === i);
  console.log({ total: arrSevenHabits.length, unique: uniqueWords?.length });

  const [words, setWords] = useState(
    top_3000.map((item, i) => ({ id: i + 1, word: item, translate: "" }))
  );

  return (
    <div className="Words">
      {words.map((item) => {
        return (
          <div key={item.id}>
            {item.id} - {item.word}
          </div>
        );
      })}
    </div>
  );
};
