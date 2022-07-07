import * as React from "react";
import { useState } from "react";
import Code from "../images/code.svg";
import Monitor from "../images/monitor.svg";
import ToggleButton from "./ToggleButton";
import styles from "./ToggleButtonPanel.module.css";

const ToggleButtonPanel = ({}) => {
  const [page, setPage] = useState<Page>(Page.Preview);

  const previewClassName =
    styles.leftButton + " " + (page === Page.Preview ? styles.pressed : "");
  const codeClassName =
    styles.rightButton + " " + (page === Page.Code ? styles.pressed : "");
  return (
    <div className={styles.panel}>
      <ToggleButton
        onClick={() => setPage(Page.Preview)}
        className={previewClassName}
      >
        <Monitor viewBox="0 0 24 24" className={styles.icon} />
        Preview
      </ToggleButton>
      <ToggleButton
        onClick={() => setPage(Page.Code)}
        className={codeClassName}
      >
        Code
        <Code viewBox="0 0 24 24" className={styles.icon} />
      </ToggleButton>
    </div>
  );
};

enum Page {
  Preview,
  Code
}

export default ToggleButtonPanel;
