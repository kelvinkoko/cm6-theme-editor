import { EditorView } from "@codemirror/basic-setup";
import * as React from "react";
import { useSelector } from "react-redux";
import CodeMirror from "../codemirror/CodeMirror";
import { TEMPLATE_JS } from "../model/TemplateString";
import { RootState } from "../store/Store";
import styles from "./Preview.module.css";

const Preview = () => {
  const cmStyle = useSelector((state: RootState) => state.theme.style);

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
