import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { toHexString } from "../model/Color";
import DefaultStyle from "../model/DefaultStyle";

const THEME_NAME = "myTheme";

const createEditorStyle = (cmStyle: CodeMirrorStyle) => {
  const style: any = {
    height: "80%",
    width: "80%",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25);"
  };
  style.backgroundColor = toHexString(cmStyle.editorBackgroundColor);
  style.color = toHexString(cmStyle.editorColor);
  return style;
};

export const toThemeObject = (cmStyle: CodeMirrorStyle) => {
  const theme = {
    "&": createEditorStyle(cmStyle),
    ".cm-scroller": { overflow: "auto" },
    ".cm-wrap": { height: "100%" }
  };
  return theme;
};

const output = `
export const basicDark = EditorView.theme({
    ${JSON.stringify(toThemeObject(DefaultStyle), null, 4)}
})
`;

export const generate = (style: CodeMirrorStyle): string => {
  return output;
};
