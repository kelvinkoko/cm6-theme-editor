import * as React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.css";
import CodeMirror from "./codemirror/CodeMirror";
import { CodeMirrorStyle } from "./model/CodeMirrorStyle";
import { Color } from "./model/Color";
import DefaultStyle from "./model/DefaultStyle";
import { TEMPLATE_JS } from "./model/TemplateString";
import SectionHeader from "./ui/SectionHeader";
import StyleItem from "./ui/StyleItem";

const App = () => {
  const [cmStyle, setCmStyle] = useState<CodeMirrorStyle>(DefaultStyle);
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
  return (
    <div className={styles.topMenu}>
      <div className={styles.topTitle}> CodeMirror 6 Theme Editor</div>
    </div>
  );
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
        initialColor={cmStyle.editorBackgroundColor}
        setColor={setStyleField(cmStyle, setCmStyle, "editorBackgroundColor")}
      />
      <StyleItem
        className={styles.styleItem}
        title={"Text"}
        initialColor={cmStyle.editorColor}
        setColor={setStyleField(cmStyle, setCmStyle, "editorColor")}
      />
    </div>
  );
};

// Function that set a particular field of the CodeMirrorStyle object
// and return a new object with the new value.
const setStyleField = (
  cmStyle: CodeMirrorStyle,
  setCmStyle: (style: CodeMirrorStyle) => void,
  field: keyof CodeMirrorStyle
): ((color: Color) => void) => {
  return (color: Color) => {
    const newStyle: CodeMirrorStyle = { ...cmStyle, [field]: color };
    setCmStyle(newStyle);
  };
};

export default hot(App);
