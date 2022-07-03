import * as React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.css";
import CodeMirror from "./codemirror/CodeMirror";
import { CodeMirrorStyle } from "./model/CodeMirrorStyle";
import StyleItem from "./ui/StyleItem";
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
      <StyleItem
        title={"Background"}
        setColor={color => {
          setCmStyle({ ...cmStyle, editorBackgroundColor: color });
        }}
      />
      <StyleItem
        title={"Color"}
        setColor={color => {
          setCmStyle({ ...cmStyle, editorColor: color });
        }}
      />
    </div>
  );
};

export default hot(App);
