import { indentWithTab } from "@codemirror/commands";
import { Compartment } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import * as React from "react";
import { useEffect } from "react";
import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { toHexString } from "../model/Color";
import styles from "./CodeMirror.module.css";
import useCodeMirror from "./useCodeMirror";
type CodeMirrorProps = {
  style: CodeMirrorStyle;
  onChange?: (doc: string) => void;
};

const theme = new Compartment();

const CodeMirror = ({ style, onChange }: CodeMirrorProps) => {
  const { ref, viewRef } = useCodeMirror([
    theme.of(createTheme(style)),
    keymap.of([indentWithTab]),
    EditorView.updateListener.of(update => {
      if (update.changes && onChange) {
        onChange(update.state.doc.toString());
      }
    })
  ]);

  useEffect(() => {
    if (!viewRef.current) {
      return;
    }
    setTheme(viewRef.current, theme, style);
  }, [style]);

  return <div className={styles.container} ref={ref} />;
};

const setTheme = (
  view: EditorView,
  theme: Compartment,
  style: CodeMirrorStyle
) => {
  view.dispatch({
    effects: theme.reconfigure(createTheme(style))
  });
};

const createTheme = (cmStyle: CodeMirrorStyle) => {
  const theme = EditorView.theme({
    "&": createEditorStyle(cmStyle),
    ".cm-scroller": { overflow: "auto" },
    ".cm-wrap": { height: "100%" }
  });
  return theme;
};

const createEditorStyle = (cmStyle: CodeMirrorStyle) => {
  const style: any = {
    height: "80%",
    width: "80%",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25);"
  };
  if (cmStyle.editorBackgroundColor) {
    style.backgroundColor = toHexString(cmStyle.editorBackgroundColor);
  }
  return style;
};
export default CodeMirror;
