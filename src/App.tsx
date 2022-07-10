import * as React from "react";
import { hot } from "react-hot-loader/root";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { CodeMirrorStyle } from "./model/CodeMirrorStyle";
import { Color } from "./model/Color";
import { Page } from "./model/Page";
import { RootState } from "./store/Store";
import { setStyle } from "./store/ThemeSlice";
import Preview from "./ui/Preview";
import SectionHeader from "./ui/SectionHeader";
import StyleItem from "./ui/StyleItem";
import ThemeOutput from "./ui/ThemeOutput";
import ToggleButtonPanel from "./ui/ToggleButtonPanel";

const App = () => {
  const cmStyle = useSelector((state: RootState) => state.theme.style);
  const page = useSelector((state: RootState) => state.editor.page);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <TopMenu />
      <div className={styles.main}>
        {LeftMenu(cmStyle, cmStyle => {
          dispatch(setStyle(cmStyle));
        })}
        {getPage(page, cmStyle)}
      </div>
    </div>
  );
};

const getPage = (page: Page, cmStyle: CodeMirrorStyle) => {
  switch (page) {
    case Page.Code:
      return <ThemeOutput />;
    case Page.Preview:
    default:
      return <Preview cmStyle={cmStyle} />;
  }
};

const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      <div className={styles.topTitle}> CodeMirror 6 Theme Editor</div>
      <ToggleButtonPanel />
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
