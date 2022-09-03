import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { SideBar } from "../../components/SideBar/SideBar";
import { Words } from "./Words/Words";
import { routes } from "../../routes";
import "./English.scss";

type tEnglishProps = {
  [key: string]: any;
};

export const English: FC<tEnglishProps> = () => {
  return (
    <div className="English">
      <SideBar />

      <div className="pageMain">
        <Routes>
          <Route path={routes.english.words} element={<Words />} />
          <Route
            path={routes.english.wordCounter}
            element={<div>count word</div>}
          />

          {/* <Route path="/" element={<App />}> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="teams" element={<Teams />}>
                  <Route path=":teamId" element={<Team />} />
                  <Route path="new" element={<NewTeamForm />} />
                  <Route index element={<LeagueStandings />} />
                </Route> */}
          {/* </Route> */}
        </Routes>
      </div>
    </div>
  );
};
