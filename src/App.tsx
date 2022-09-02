import { RefObject, useEffect, useRef, useState } from "react";
import { FormRef } from "./components/Forms/FormRef/FormRef";
import { Game } from "./components/games/game/Game";
import { Example1 } from "./components/ReactHookForm/Example1";
import { Words } from "./components/Words/Words";
import { UseControlledInputExample } from "./hooks/useInput/UseControlledInputExamples";
import { UseInputExample } from "./hooks/useInput/UseInputExample";
import { TestHook } from "./hooks/useInput/useTextInput/TestHook";

import axios from "axios";
import { Text } from "./components/Text/Text";
import { Emphasis } from "./components/Text/Emphasis/Emphasis";

function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:8000/posts");
  //   axios.get("http://localhost:8000/post/62b7e5138ead9f3b050fb371");
  //   axios.get("http://localhost:8000/posts/tags");
  // });

  const refHeading = useRef<HTMLHeadingElement | null>(null);
  const refAnchor = useRef<HTMLAnchorElement | null>(null);

  return (
    <div className="App">
      <Text as="h1">Text...</Text>
      <Text as="h3">Text...</Text>
      <Text as="a" href="https://google.com" target={"_blank"}>
        Text...
        <span>som</span>
      </Text>

      <Text as={"blockquote"}>default</Text>
      <Text color="red" size="px18">
        colored
      </Text>
      <Text as={Emphasis}>You are awesome !</Text>

      <Text as="h5" ref={refHeading}>
        With ref h5
      </Text>
      <Text as="a" ref={refAnchor}>
        With ref h5
      </Text>
      {/* <Words /> */}
      {/* <Game /> */}
    </div>
    // <div
    //   className="App"
    //   style={{ display: "flex", justifyContent: "space-around" }}
    // >
    //   {/* <FormRef /> */}
    //   <TestHook />
    //   <UseControlledInputExample />

    //   {/* <UseInputExample /> */}
    //   {/* <Example1 /> */}
    // </div>
  );
}

export default App;
