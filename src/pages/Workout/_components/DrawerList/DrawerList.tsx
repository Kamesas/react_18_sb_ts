import { FC } from "react";
import { Box, List } from "@mui/material";
import { workoutLinks } from "../../workoutLinks";
import { Navlink } from "../Navlink/Navlink";

type tDrawerListProps = {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export const DrawerList: FC<tDrawerListProps> = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {workoutLinks.map((link, i) => {
          return (
            <Navlink
              key={i}
              primary={link.title}
              to={link.url}
              icon={link.icon}
            />
          );
        })}
      </List>
    </Box>
  );
};
