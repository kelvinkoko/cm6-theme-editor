import * as React from "react";
import Arrow from "../images/arrow.svg";
import styles from "./Section.module.css";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div className={styles.section}>
      <SectionHeader
        title={title}
        isExpanded={isExpanded}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      />
      {isExpanded ? children : null}
    </div>
  );
};

type SectionHeader = {
  title: string;
  isExpanded: boolean;
  onClick: () => void;
};

const SectionHeader = ({ title, isExpanded, onClick }: SectionHeader) => {
  return (
    <div onClick={onClick}>
      <div className={styles.headerRow}>
        <div className={styles.title}>{title}</div>
        <Arrow
          viewBox="0 0 13 8"
          className={`${styles.arrow} ${isExpanded ? "" : styles.rotate}`}
        />
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default Section;
