import * as React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.css";
import CodeMirror from "./codemirror/CodeMirror";
import { CodeMirrorStyle } from "./model/CodeMirrorStyle";
import { TEMPLATE_JS } from "./model/TemplateString";
import SectionHeader from "./ui/SectionHeader";
import StyleItem from "./ui/StyleItem";

const App = () => {
  const [cmStyle, setCmStyle] = useState<CodeMirrorStyle>({});
  return (
    <div className={styles.container}>
      <TopMenu />
      <div className={styles.main}>
        {LeftMenu(cmStyle, setCmStyle)}
        <CodeMirror style={cmStyle} initialValue={TEMPLATE_JS} />
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
      <SectionHeader title="Editor" />
      <StyleItem
        className={styles.styleItem}
        title={"Background"}
        setColor={color => {
          setCmStyle({ ...cmStyle, editorBackgroundColor: color });
        }}
      />
      <StyleItem
        className={styles.styleItem}
        title={"Text"}
        setColor={color => {
          setCmStyle({ ...cmStyle, editorColor: color });
        }}
      />
    </div>
  );
};

export default hot(App);
