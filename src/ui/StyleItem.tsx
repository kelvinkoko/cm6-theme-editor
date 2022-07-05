import * as React from "react";
import { Color } from "../model/Color";
import ColorSelector from "./ColorSelector";
import styles from "./StyleItem.module.css";

type StyleItemProps = {
  title: string;
  initialColor: Color;
  setColor: (color: Color) => void;
  className?: string;
};
const StyleItem = ({
  title,
  initialColor,
  setColor,
  className
}: StyleItemProps) => {
  return (
    <div className={className}>
      <div className={styles.title}>{title}</div>
      <ColorSelector initialColor={initialColor} onChange={setColor} />
    </div>
  );
};

export default StyleItem;
