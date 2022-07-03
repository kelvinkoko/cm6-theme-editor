import * as React from "react";
import { Color } from "../model/Color";
import ColorSelector from "./ColorSelector";
import styles from "./StyleItem.module.css";

type StyleItemProps = {
  title: string;
  setColor: (color: Color) => void;
  className?: string;
};
const StyleItem = ({ title, setColor, className }: StyleItemProps) => {
  return (
    <div className={className}>
      <div className={styles.title}>{title}</div>
      <ColorSelector onChange={setColor} />
    </div>
  );
};

export default StyleItem;
