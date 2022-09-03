import { FC } from "react";
import { Navigation } from "./Navigation/Navigation";

type tHeaderProps = {
  [key: string]: any;
};

export const Header: FC<tHeaderProps> = () => {
  return (
    <div className="Header">
      Header
      <Navigation />
    </div>
  );
};
