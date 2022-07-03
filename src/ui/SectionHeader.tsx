import * as React from "react";
import arrow from "../images/arrow.svg";
import styles from "./SectionHeader.module.css";
type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.title}>{title}</div>
        <img className={styles.arrow} src={arrow} />
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default SectionHeader;
