import { EditorView } from "@codemirror/basic-setup";
import * as React from "react";
import CodeMirror from "../codemirror/CodeMirror";
import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { TEMPLATE_JS } from "../model/TemplateString";
import styles from "./Preview.module.css";

type PreviewProps = {
  cmStyle: CodeMirrorStyle;
};

const Preview = ({ cmStyle }: PreviewProps) => {
  return (
    <CodeMirror
      style={cmStyle}
      className={styles.codeMirrorContainer}
      initialValue={TEMPLATE_JS}
      extensions={[
        EditorView.theme({
          "&": {
            width: "80%",
            height: "80%",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25);"
          }
        })
      ]}
    />
  );
};

export default Preview;
