import { FC, ReactNode, useState } from "react";
import "./Sidebar.scss";

type tSideBarProps = {
  children: ReactNode;
};

export const SideBar: FC<tSideBarProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggler = () => setCollapsed((prev) => !prev);

  return (
    <div className={`SideBar ${collapsed ? "collapsed" : ""} `}>
      <button onClick={toggler}>{collapsed ? "Show" : "Hide"}</button>
      <div className="navigation">{children}</div>

      <button className="AccountBtn">Account</button>
    </div>
  );
};
