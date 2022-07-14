import * as React from "react";
import Arrow from "../images/arrow.svg";
import styles from "./Section.module.css";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className={styles.section}>
      <SectionHeader title={title} />
      {children}
    </div>
  );
};

type SectionHeader = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeader) => {
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

export default Section;
