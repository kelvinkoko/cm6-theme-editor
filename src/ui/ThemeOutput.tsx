import * as React from "react";
import { useSelector } from "react-redux";
import CodeMirror from "../codemirror/CodeMirror";
import DefaultStyle from "../model/DefaultStyle";
import { RootState } from "../store/Store";
import { generate } from "../themeGenerator/ThemeGenerator";
import { download } from "../utils/Downloader";
import styles from "./ThemeOutput.module.css";
const ThemeOutput = () => {
  const cmStyle = useSelector((state: RootState) => state.theme.style);
  const THEME_NAME = "myTheme";
  const filename = `${THEME_NAME}.js`;
  const theme = generate(THEME_NAME, cmStyle);
  return (
    <div>
      <div
        className={styles.downloadButton}
        onClick={() => {
          download(filename, theme);
        }}
      >
        download {filename}
      </div>
      <CodeMirror style={DefaultStyle} initialValue={theme} />
    </div>
  );
};

export default ThemeOutput;
