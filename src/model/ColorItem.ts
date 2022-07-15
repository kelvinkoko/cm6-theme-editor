import { Color } from "./Color";
export interface ColorItem {
  name: string;
  color: Color;
  appendToTheme: (color: Color) => {};
}
