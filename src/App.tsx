import * as React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.css";
import CodeMirror from "./codemirror/CodeMirror";
import { CodeMirrorStyle } from "./model/CodeMirrorStyle";
import ColorSelector from "./ui/ColorSelector";
const App = () => {
  const [cmStyle, setCmStyle] = useState<CodeMirrorStyle>({});
  return (
    <div className={styles.container}>
      <TopMenu />
      <div className={styles.main}>
        {LeftMenu(cmStyle, setCmStyle)}
        <CodeMirror style={cmStyle} />
      </div>
    </div>
  );
};

const TopMenu = () => {
  return <div className={styles.topMenu}></div>;
};

const LeftMenu = (
  cmStyle: CodeMirrorStyle,
  setCmStyle: (style: CodeMirrorStyle) => void
) => {
  return (
    <div className={styles.leftMenu}>
      <ColorSelector
        onChange={color => {
          setCmStyle({ ...cmStyle, editorBackgroundColor: color });
        }}
      />
    </div>
  );
};

export default hot(App);
