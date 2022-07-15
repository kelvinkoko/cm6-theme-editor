import { CodeMirrorStyle } from "./CodeMirrorStyle";
import { toColor, toHexString } from "./Color";

const DefaultStyle: CodeMirrorStyle = {
  editorStyle: [
    {
      name: "editorBackgroundColor",
      color: toColor("#ffffff"),
      appendToTheme: color => {
        return { "&": { backgroundColor: toHexString(color) } };
      }
    },
    {
      name: "editorColor",
      color: toColor("#000000"),
      appendToTheme: color => {
        return { "&": { color: toHexString(color) } };
      }
    }
  ]
};

export default DefaultStyle;
