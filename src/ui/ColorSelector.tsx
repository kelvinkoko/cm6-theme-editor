import * as React from "react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { Color, toHexString, toRgbaString } from "../model/Color";
import styles from "./ColorSelector.module.css";

type ColorSelectorProps = {
  color: Color;
  onChange: (color: Color) => void;
};

const ColorSelector = ({ color, onChange }: ColorSelectorProps) => {
  const [isShowingPicker, setIsShowingPicker] = useState(false);
  const [clickY, setClickY] = useState(0);
  const background = toRgbaString(color);

  const handleColorChange = (newColor: any) => {
    onChange(newColor.rgb);
  };

  return (
    <div>
      <div className={styles.selector}>
        <div className={styles.hexText}>{toHexString(color)}</div>
        <div
          className={styles.color}
          style={{ backgroundColor: background }}
          onClick={event => {
            setClickY(event.clientY);
            setIsShowingPicker(!isShowingPicker);
          }}
        />
      </div>
      {isShowingPicker ? (
        <div
          className={`${styles.popover} ${
            isOverflowOutsideBottom(clickY) ? styles.alignBottom : ""
          }`}
        >
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

const isOverflowOutsideBottom = (clickY: number) => {
  const windowHeight = window.innerHeight;
  return clickY > windowHeight - PICKER_HEIGHT;
};

const PICKER_HEIGHT: number = 300;

export default ColorSelector;
