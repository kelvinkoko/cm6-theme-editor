import * as React from "react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { Color, toHexString, toRgbaString } from "../model/Color";
import styles from "./ColorSelector.module.css";

type ColorSelectorProps = {
  onChange: (color: Color) => void;
};

const ColorSelector = ({ onChange }: ColorSelectorProps) => {
  const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [isShowingPicker, setIsShowingPicker] = useState(false);
  const background = toRgbaString(color);

  const handleColorChange = (newColor: any) => {
    setColor(newColor.rgb);
    onChange(newColor.rgb);
  };

  return (
    <div>
      <div className={styles.selector}>
        <div className={styles.hexText}>{toHexString(color)}</div>
        <div
          className={styles.color}
          style={{ backgroundColor: background }}
          onClick={() => {
            setIsShowingPicker(!isShowingPicker);
          }}
        />
      </div>
      {isShowingPicker ? (
        <div className={styles.popover}>
          <div
            className={styles.cover}
            onClick={() => {
              setIsShowingPicker(false);
            }}
          />
          <SketchPicker color={color} onChange={handleColorChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorSelector;
