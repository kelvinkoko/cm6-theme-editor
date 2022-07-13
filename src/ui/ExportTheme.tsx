import { EditorView } from "@codemirror/basic-setup";
import * as React from "react";
import { useSelector } from "react-redux";
import CodeMirror from "../codemirror/CodeMirror";
import DefaultStyle from "../model/DefaultStyle";
import { RootState } from "../store/Store";
import { generate } from "../themeGenerator/ThemeGenerator";
import { download } from "../utils/Downloader";
import styles from "./ExportTheme.module.css";

const ExportTheme = () => {
  const cmStyle = useSelector((state: RootState) => state.theme.style);
  const THEME_NAME = "myTheme";
  const filename = `${THEME_NAME}.js`;
  const theme = generate(THEME_NAME, cmStyle);
  return (
    <div className={styles.mainLayout}>
      <div
        className={styles.downloadButton}
        onClick={() => {
          download(filename, theme);
        }}
      >
        download {filename}
      </div>
      <div className={styles.usageText}>
        Download theme.js and include it as extension like below
      </div>
      <CodeMirror
        style={DefaultStyle}
        initialValue={theme}
        extensions={[
          EditorView.theme({
            "&": {
              width: "80%",
              maxHeight: "80%",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25);"
            }
          })
        ]}
      />
    </div>
  );
};

export default ExportTheme;
