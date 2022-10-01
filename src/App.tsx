import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Notes } from "./pages/Notes/Notes";
import { English } from "./pages/English/English";
import { routes } from "./routes";
import { Workout } from "./pages/Workout/Workout";
import { Tiny } from "./pages/Tiny/Tiny";
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
            <Route path={routes.workout.main + "/*"} element={<Workout />} />
            <Route path={routes.tiny.main + "/*"} element={<Tiny />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
