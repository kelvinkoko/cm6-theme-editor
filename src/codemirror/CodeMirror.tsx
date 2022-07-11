import { indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { Compartment } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import * as React from "react";
import { useEffect } from "react";
import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { toThemeObject } from "../themeGenerator/ThemeGenerator";
import styles from "./CodeMirror.module.css";
import useCodeMirror from "./useCodeMirror";

type CodeMirrorProps = {
  style: CodeMirrorStyle;
  initialValue?: string;
  onChange?: (doc: string) => void;
};

const theme = new Compartment();

const CodeMirror = ({ style, initialValue, onChange }: CodeMirrorProps) => {
  const { ref, viewRef } = useCodeMirror(
    [
      javascript(),
      theme.of(createTheme(style)),
      keymap.of([indentWithTab]),
      EditorView.updateListener.of(update => {
        if (update.changes && onChange) {
          onChange(update.state.doc.toString());
        }
      })
    ],
    initialValue
  );

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
  const theme = EditorView.theme(toThemeObject(cmStyle));
  return theme;
};

export default CodeMirror;
