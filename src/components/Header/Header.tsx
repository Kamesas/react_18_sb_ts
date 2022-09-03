import { FC } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Text } from "../Text/Text";
import "./Header.scss";

type tHeaderProps = {
  [key: string]: any;
};

export const Header: FC<tHeaderProps> = () => {
  return (
    <div className="Header">
      <Text as={Link} to="/" size="px18" color="red">
        LogO
      </Text>
      <Navigation />
    </div>
  );
};
