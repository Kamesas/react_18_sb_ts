import { UseControlledInputExample } from "./hooks/useInput/UseControlledInputExamples";
import { UseInputExample } from "./hooks/useInput/UseInputExample";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <UseInputExample />
      <UseControlledInputExample />
    </div>
  );
}

export default App;
