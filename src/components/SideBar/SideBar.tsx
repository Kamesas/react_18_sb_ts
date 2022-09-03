import { FC } from "react";
import { NavLink } from "react-router-dom";

type tSideBarProps = {
  [key: string]: any;
};

export const SideBar: FC<tSideBarProps> = () => {
  return (
    <div className="SideBar">
      <NavLink to={"/english/words"}>Words</NavLink>
      <NavLink to={"/english/word-counter"}>Word counter</NavLink>
    </div>
  );
};
