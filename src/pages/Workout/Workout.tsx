import { FC } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { navPath, routes } from "../../routes";
import { Chart } from "./Chart/Chart";
import { Training } from "./Training/Training";

type tWorkoutProps = {
  [key: string]: any;
};

export const Workout: FC<tWorkoutProps> = () => {
  return (
    <PageLayout
      sidebarChildren={
        <>
          <NavLink to={navPath.workout.training}>Training</NavLink>
          <NavLink to={navPath.workout.chart}>Chart</NavLink>
        </>
      }
    >
      <Routes>
        <Route path={routes.workout.training} element={<Training />} />
        <Route path={routes.workout.chart} element={<Chart />} />

        <Route path="*" element={<Navigate to={routes.workout.training} />} />
      </Routes>
    </PageLayout>
  );
};
