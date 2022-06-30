import * as React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader/root";
import CodeMirror from "./codemirror/CodeMirror";
import { CodeMirrorStyle } from "./model/CodeMirrorStyle";
import ColorSelector from "./ui/ColorSelector";

const App = () => {
  const [cmStyle, setCmStyle] = useState<CodeMirrorStyle>({});
  return (
    <>
      <CodeMirror style={cmStyle} />
      <ColorSelector
        onChange={color => {
          setCmStyle({ ...cmStyle, editorBackgroundColor: color });
        }}
      />
    </>
  );
};

export default hot(App);
