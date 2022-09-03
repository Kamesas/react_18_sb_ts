import { FC } from "react";
import { NavLink } from "react-router-dom";

type tNavigationProps = {
  [key: string]: any;
};

export const Navigation: FC<tNavigationProps> = () => {
  return (
    <div className="Navigation">
      <NavLink to={"/english"}>English</NavLink>
      <NavLink to={"/notes"}>Notes</NavLink>
    </div>
  );
};
