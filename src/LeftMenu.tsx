import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { CodeMirrorStyle } from "./model/CodeMirrorStyle";
import { Color } from "./model/Color";
import { RootState } from "./store/Store";
import { setStyle } from "./store/ThemeSlice";
import SectionHeader from "./ui/SectionHeader";
import StyleItem from "./ui/StyleItem";

const LeftMenu = () => {
  const cmStyle = useSelector((state: RootState) => state.theme.style);
  const dispatch = useDispatch();
  const setCmStyle: (style: CodeMirrorStyle) => void = (
    style: CodeMirrorStyle
  ) => {
    dispatch(setStyle(style));
  };

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

export default LeftMenu;
