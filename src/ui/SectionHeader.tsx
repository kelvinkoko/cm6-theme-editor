import * as React from "react";
import Arrow from "../images/arrow.svg";
import styles from "./SectionHeader.module.css";
type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.title}>{title}</div>
        <Arrow viewBox="0 0 13 8" className={styles.arrow} />
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default SectionHeader;
