interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export const toRgbaString = (color: Color): string => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
};

const toHex = (value: number): string => {
  let hex = value.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const toHexString = (color: Color): string => {
  return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
};
