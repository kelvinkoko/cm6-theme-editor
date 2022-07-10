import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Code from "../images/code.svg";
import Monitor from "../images/monitor.svg";
import { Page } from "../model/Page";
import { setPage } from "../store/EditorSlice";
import { RootState } from "../store/Store";
import ToggleButton from "./ToggleButton";
import styles from "./ToggleButtonPanel.module.css";

const ToggleButtonPanel = ({}) => {
  const page = useSelector((state: RootState) => state.editor.page);
  const dispatch = useDispatch();

  const previewClassName =
    styles.leftButton + " " + (page === Page.Preview ? styles.pressed : "");
  const codeClassName =
    styles.rightButton + " " + (page === Page.Code ? styles.pressed : "");
  return (
    <div className={styles.panel}>
      <ToggleButton
        onClick={() => dispatch(setPage(Page.Preview))}
        className={previewClassName}
      >
        <Monitor viewBox="0 0 24 24" className={styles.icon} />
        Preview
      </ToggleButton>
      <ToggleButton
        onClick={() => dispatch(setPage(Page.Code))}
        className={codeClassName}
      >
        Export
        <Code viewBox="0 0 24 24" className={styles.icon} />
      </ToggleButton>
    </div>
  );
};

export default ToggleButtonPanel;
