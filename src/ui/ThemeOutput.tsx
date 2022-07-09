import * as React from "react";
import CodeMirror from "../codemirror/CodeMirror";
import DefaultStyle from "../model/DefaultStyle";

const ThemeOutput = () => {
  return (
    <div>
      <CodeMirror style={DefaultStyle} />
    </div>
  );
};

export default ThemeOutput;
