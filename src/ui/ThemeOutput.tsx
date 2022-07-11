import * as React from "react";
import CodeMirror from "../codemirror/CodeMirror";
import DefaultStyle from "../model/DefaultStyle";
import { generate } from "../themeGenerator/ThemeGenerator";

const ThemeOutput = () => {
  const theme = generate(DefaultStyle);
  return (
    <div>
      <CodeMirror style={DefaultStyle} initialValue={theme} />
    </div>
  );
};

export default ThemeOutput;
