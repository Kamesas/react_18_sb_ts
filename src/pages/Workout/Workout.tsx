import { useState } from "react";
import Box from "@mui/material/Box";
import { Navigate, Route, Routes } from "react-router-dom";
import { Training } from "./Training/Training";
import { routes } from "../../routes";
import { Chart } from "./Chart/Chart";
import { Toolbar } from "@mui/material";
import { Header } from "./_components/Header/Header";
import { Drawer } from "./_components/Drawer/Drawer";
import { DrawerList } from "./_components/DrawerList/DrawerList";

type tWorkoutProps = {
  [key: string]: any;
};

export const Workout: React.FC<tWorkoutProps> = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <div className="Workout">
      <Header setOpen={setOpen} />

      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>

      <Box component="main">
        <Toolbar />
        <Routes>
          <Route path={routes.workout.training} element={<Training />} />
          <Route path={routes.workout.chart} element={<Chart />} />

          <Route path="*" element={<Navigate to={routes.workout.training} />} />
        </Routes>
      </Box>
    </div>
  );
};
