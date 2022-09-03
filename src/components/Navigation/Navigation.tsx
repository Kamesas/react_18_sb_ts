import { FC } from "react";
import { NavLink } from "react-router-dom";
import { navPath } from "../../routes";
import "./Navigation.scss";

type tNavigationProps = {
  [key: string]: any;
};

export const Navigation: FC<tNavigationProps> = () => {
  return (
    <div className="Navigation">
      <NavLink to={navPath.english.main}>English</NavLink>
      <NavLink to={navPath.notes.main}>Notes</NavLink>
      <NavLink to={navPath.workout.main}>Workout</NavLink>
    </div>
  );
};
