import * as React from "react";
import styles from "./App.module.css";
import ToggleButtonPanel from "./ui/ToggleButtonPanel";

const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      <div className={styles.topTitle}> CodeMirror 6 Theme Editor</div>
      <ToggleButtonPanel />
    </div>
  );
};

export default TopMenu;
