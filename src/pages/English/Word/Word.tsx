import { FC } from "react";
import { useParams } from "react-router-dom";

type tWordProps = {
  [key: string]: any;
};

export const Word: FC<tWordProps> = () => {
  const params = useParams();
  return <div className="Word">Word - {params?.id}</div>;
};
