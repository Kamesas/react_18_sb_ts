import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notes } from "./pages/Notes/Notes";
import { English } from "./pages/English/English";
import { routes } from "./routes";
import { Workout } from "./pages/Workout/Workout";
import { Tiny } from "./pages/Tiny/Tiny";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.scss";
import { AppLayoutWithHeader } from "./components/AppLayoutWithHeader/AppLayoutWithHeader";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <AppLayoutWithHeader>
              <div>main</div>
            </AppLayoutWithHeader>
          }
        />
        <Route
          path={routes.english.main + "/*"}
          element={
            <AppLayoutWithHeader>
              <English />
            </AppLayoutWithHeader>
          }
        />
        <Route
          path={routes.notes.main}
          element={
            <AppLayoutWithHeader>
              <Notes />
            </AppLayoutWithHeader>
          }
        />
        <Route path={routes.workout.main + "/*"} element={<Workout />} />
        <Route
          path={routes.tiny.main + "/*"}
          element={
            <AppLayoutWithHeader>
              <Tiny />
            </AppLayoutWithHeader>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
