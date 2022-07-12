import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { toHexString } from "../model/Color";

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

export const generate = (themeName: string, style: CodeMirrorStyle): string => {
  const output = `
import { EditorView } from '@codemirror/view'

export const basicDark = EditorView.theme(
    ${JSON.stringify(toThemeObject(style), null, 4)}
)
`;
  return output;
};
