import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { deepMergeObject } from "../utils/ObjectUtils";

export const toThemeObject = (cmStyle: CodeMirrorStyle) => {
  let theme = {
    ".cm-scroller": { overflow: "auto" },
    ".cm-wrap": { height: "100%" }
  };
  cmStyle.editorStyle.forEach(style => {
    theme = deepMergeObject(theme, style.appendToTheme(style.color));
  });
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
