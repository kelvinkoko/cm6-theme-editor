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
        }
      ]
    }
  ]
};

export default DefaultStyle;
