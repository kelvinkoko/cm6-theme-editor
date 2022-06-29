import * as React from "react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { toHexString, toRgbaString } from "../model/Color";
import styles from "./ColorSelector.module.css";

const ColorSelector = () => {
  const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [isShowingPicker, setIsShowingPicker] = useState(false);
  const background = toRgbaString(color);
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
          <SketchPicker
            color={color}
            onChange={(newColor: any) => {
              setColor(newColor.rgb);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorSelector;
