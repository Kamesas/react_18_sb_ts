import { FC, ReactNode } from "react";
import DrawerMIU from "@mui/material/Drawer";
import { Toolbar } from "@mui/material";

type tDrawerProps = {
  isOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  children: ReactNode;
};

export const Drawer: FC<tDrawerProps> = ({
  isOpen,
  toggleDrawer,
  children,
}) => {
  return (
    <DrawerMIU
      anchor={"left"}
      open={isOpen}
      onClose={toggleDrawer(false)}
      // sx={(theme) => ({
      //   // flexShrink: 0,
      //   [`& .MuiDrawer-paper`]: {
      //     top: 64,
      //   },
      // })}
    >
      <Toolbar />
      {children}
    </DrawerMIU>
  );
};
