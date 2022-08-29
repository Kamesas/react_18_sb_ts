import { FC, ReactText } from "react";

type tEmphasisProps = {
  children: ReactText;
};

export const Emphasis: FC<tEmphasisProps> = ({ children }) => {
  return <em className="Emphasis">{children}</em>;
};
