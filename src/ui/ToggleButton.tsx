import * as React from "react";
import styles from "./ToggleButton.module.css";
type ToggleButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
};
const ToggleButton = ({ onClick, children, className }: ToggleButtonProps) => {
  return (
    <div onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </div>
  );
};

export default ToggleButton;
