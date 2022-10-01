import { FC } from "react";
import { NavLink } from "react-router-dom";
import { commonNavigation } from "../../commonNavigation";
import "./Navigation.scss";

type tNavigationProps = {
  [key: string]: any;
};

export const Navigation: FC<tNavigationProps> = () => {
  return (
    <div className="Navigation">
      {commonNavigation?.map((nav, i) => {
        return (
          <NavLink key={i} to={nav.url}>
            {nav.title}
          </NavLink>
        );
      })}
    </div>
  );
};
