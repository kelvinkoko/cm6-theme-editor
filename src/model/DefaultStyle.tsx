import { CodeMirrorStyle } from "./CodeMirrorStyle";
import { toColor, toHexString } from "./Color";

const DefaultStyle: CodeMirrorStyle = {
  sections: [
    {
      title: "Editor",
      items: [
        {
          name: "Background",
          color: toColor("#ffffff"),
          appendToTheme: color => {
            return { "&": { backgroundColor: toHexString(color) } };
          }
        },
        {
          name: "Text",
          color: toColor("#000000"),
          appendToTheme: color => {
            return { "&": { color: toHexString(color) } };
          }
        },
        {
          name: "Cursor",
          color: toColor("#000000"),
          appendToTheme: color => {
            return {
              ".cm-content": {
                caretColor: toHexString(color)
              },
              "&.cm-focused .cm-cursor": {
                borderLeftColor: toHexString(color)
              }
            };
          }
        },
        {
          name: "Selection",
          color: toColor("#007744"),
          appendToTheme: color => {
            return {
              "&.cm-focused .cm-selectionBackground, ::selection": {
                backgroundColor: toHexString(color)
              }
            };
          }
        }
      ]
    },
    {
      title: "Gutter",
      items: [
        {
          name: "Background",
          color: toColor("#ffffff"),
          appendToTheme: color => {
            return { ".cm-gutters": { backgroundColor: toHexString(color) } };
          }
        },
        {
          name: "Line Numbers",
          color: toColor("#000000"),
          appendToTheme: color => {
            return { ".cm-gutters": { color: toHexString(color) } };
          }
        }
      ]
    }
  ]
};

export default DefaultStyle;
