import { FC, ReactNode } from "react";
import { SideBar } from "../SideBar/SideBar";
import "./PageLayout.scss";

type tPageLayoutProps = {
  sidebarChildren?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export const PageLayout: FC<tPageLayoutProps> = ({
  sidebarChildren,
  className = "",
  children,
}) => {
  return (
    <div className={`PageLayout ${className}`}>
      {sidebarChildren && <SideBar>{sidebarChildren}</SideBar>}

      <div className="content">{children}</div>
    </div>
  );
};
