import { FC } from "react";
import { Header } from "../Header/Header";
import "./AppLayoutWithHeader.scss";

type tAppLayoutWithHeaderProps = {
  [key: string]: any;
};

export const AppLayoutWithHeader: FC<tAppLayoutWithHeaderProps> = ({
  children,
}) => {
  return (
    <div className="AppLayoutWithHeader">
      <Header />
      <div className="main">{children}</div>
    </div>
  );
};
