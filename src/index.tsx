import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/index.scss";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root") as Element | DocumentFragment;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
