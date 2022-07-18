import { HighlightStyle } from "@codemirror/language";
import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { toHexString } from "../model/Color";
import HighlightStyleItem from "../model/HighlightStyleItem";
import { deepMergeObject } from "../utils/ObjectUtils";

export const toThemeObject = (cmStyle: CodeMirrorStyle) => {
  let theme = {
    ".cm-scroller": { overflow: "auto" },
    ".cm-wrap": { height: "100%" }
  };
  cmStyle.sections.forEach(section => {
    section.items.forEach(style => {
      theme = deepMergeObject(theme, style.appendToTheme(style.color));
    });
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

const toHighlightItem = (style: HighlightStyleItem) => {
  return {
    tag: style.tags,
    color: toHexString(style.color)
  };
};

export const toHighlighStyle = (cmStyle: CodeMirrorStyle) => {
  return HighlightStyle.define(
    cmStyle.highlights.map(style => toHighlightItem(style))
  );
};
