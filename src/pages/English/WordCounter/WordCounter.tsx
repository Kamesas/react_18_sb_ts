import { FC, useEffect, useState } from "react";
import { Text } from "../../../components/Text/Text";
import { sevenStr } from "./sevenHabits";

type tWordCounterProps = {
  [key: string]: any;
};

export const WordCounter: FC<tWordCounterProps> = () => {
  const [res, setRes] = useState({ unique: 0, total: 0 });

  useEffect(() => {
    setTimeout(() => {
      const { arrSevenHabits, uniqueWords } = counter();

      setRes(() => ({
        unique: uniqueWords?.length,
        total: arrSevenHabits.length,
      }));
    }, 0);
  }, []);

  const counter = () => {
    const filtered = sevenStr.replace(/(\b\w{1,3}\b)|[@©,.!?\-(:)s'"]/gim, ""); // prettier-ignore
    const arrSevenHabits = filtered.split(" ");
    const uniqueWords = arrSevenHabits.filter((x, i, a) => a.indexOf(x) === i);

    return {
      filtered,
      arrSevenHabits,
      uniqueWords,
    };
  };

  return (
    <div className="WordCounter">
      <Text size="px18">Words counter</Text>
      <div>Total: {res?.total || "loading ..."}</div>
      <div>Unique: {res?.unique || "loading ..."}</div>
    </div>
  );
};
