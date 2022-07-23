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

const toExportHighlightItem = (style: HighlightStyleItem) => {
  return `
  {
    tag: ${style.tagsInString},
    color: "${toHexString(style.color)}"
  }
  `;
};

const toExportHighlightItems = (cmStyle: CodeMirrorStyle) => {
  return cmStyle.highlights.map(style => toExportHighlightItem(style));
};

export const generate = (themeName: string, style: CodeMirrorStyle): string => {
  const highlight = toExportHighlightItems(style);
  const output = `
import { EditorView } from '@codemirror/view'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { tags } from "@lezer/highlight";

const theme = ${JSON.stringify(toThemeObject(style), null, 4)}
const highlightStyles = HighlightStyle.define([   
    ${highlight.join(",\n")}
])

export const ${themeName} = [
    EditorView.theme(theme),
    syntaxHighlighting(highlightStyles)
]
`;
  return output;
};

const toHighlightItem = (style: HighlightStyleItem) => {
  return {
    tag: style.tags,
    color: toHexString(style.color)
  };
};

const toHighlightItems = (cmStyle: CodeMirrorStyle) => {
  return cmStyle.highlights.map(style => toHighlightItem(style));
};

export const toHighlighStyle = (cmStyle: CodeMirrorStyle) => {
  return HighlightStyle.define(toHighlightItems(cmStyle));
};
