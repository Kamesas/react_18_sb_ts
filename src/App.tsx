import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Notes } from "./pages/Notes/Notes";
import { English } from "./pages/English/English";
import { routes } from "./routes";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="main">
          <Routes>
            <Route index element={<div>main</div>} />
            <Route path={routes.english.main + "/*"} element={<English />} />
            <Route path={routes.notes.main} element={<Notes />} />

            {/* <Route path="/" element={<App />}> */}
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="words" element={<Words />} /> */}
            {/* <Route path="teams" element={<Teams />}>
                  <Route path=":teamId" element={<Team />} />
                  <Route path="new" element={<NewTeamForm />} />
                  <Route index element={<LeagueStandings />} />
                </Route> */}
            {/* </Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
