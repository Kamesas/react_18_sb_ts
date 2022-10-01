import { FC } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { navPath, routes } from "../../routes";
import { FIlters } from "./FIlters/FIlters";

type tTinyProps = {
  [key: string]: any;
};

export const Tiny: FC<tTinyProps> = () => {
  return (
    <PageLayout
      sidebarChildren={
        <>
          <NavLink to={navPath.tiny.filters}>Filters</NavLink>
        </>
      }
    >
      <Routes>
        <Route path={routes.tiny.filters} element={<FIlters />} />

        <Route path="*" element={<Navigate to={routes.tiny.filters} />} />
      </Routes>
    </PageLayout>
  );
};
