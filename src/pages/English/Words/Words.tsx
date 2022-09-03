import { FC, useEffect, useState } from "react";
import { top_3000 } from "./words_3000";
import { navPath } from "../../../routes";
import { Link } from "react-router-dom";
import { Text } from "../../../components/Text/Text";

interface iWordsProps {
  [key: string]: any;
}

export const Words: FC<iWordsProps> = () => {
  const [words, setWords] = useState<
    {
      id: number;
      word: string | number;
      translate: string;
    }[]
  >([]);

  useEffect(() => {
    const list = top_3000.map((item, i) => ({
      id: i + 1,
      word: item,
      translate: "",
    }));
    setWords(() => list);
  }, []);

  return (
    <div className="Words">
      <Text size="px18">List of top 3000 english word</Text>

      {words.map((item) => {
        return (
          <Text
            as={Link}
            key={item.id}
            size="px18"
            to={navPath.english.word(item.word.toString())}
          >
            {item.id} - {item.word}
          </Text>
        );
      })}
    </div>
  );
};
