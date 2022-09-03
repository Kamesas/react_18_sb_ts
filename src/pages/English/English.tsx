import { FC } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Words } from "./Words/Words";
import { navPath, routes } from "../../routes";
import { WordCounter } from "./WordCounter/WordCounter";
import { Word } from "./Word/Word";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import "./English.scss";

type tEnglishProps = {
  [key: string]: any;
};

export const English: FC<tEnglishProps> = () => {
  return (
    <PageLayout
      sidebarChildren={
        <>
          <NavLink to={navPath.english.words}>Words</NavLink>
          <NavLink to={navPath.english.wordCounter}>Word counter</NavLink>
        </>
      }
    >
      <Routes>
        <Route path={routes.english.words} element={<Words />} />
        <Route path={routes.english.words + "/:id"} element={<Word />} />
        <Route path={routes.english.wordCounter} element={<WordCounter />} />

        <Route path="*" element={<Navigate to={routes.english.words} />} />
      </Routes>
    </PageLayout>
  );
};
