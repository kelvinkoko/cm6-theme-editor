export type HexString = `#${string}`;

export interface Color {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;
}

export const toRgbaString = (color: Color): string => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
};

const toHex = (value: number): string => {
  let hex = value.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const toHexString = (color: Color): HexString => {
  return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
};

// Function to convert a hex string to a Color object.
// The hex string must be in the format #RRGGBB or #RRGGBBAA.
export const toColor = (hex: string): Color => {
  if (hex.length == 7) {
    return {
      r: parseInt(hex.substring(1, 3), 16),
      g: parseInt(hex.substring(3, 5), 16),
      b: parseInt(hex.substring(5, 7), 16),
      a: 1
    };
  } else if (hex.length == 9) {
    return {
      r: parseInt(hex.substring(1, 3), 16),
      g: parseInt(hex.substring(3, 5), 16),
      b: parseInt(hex.substring(5, 7), 16),
      a: parseInt(hex.substring(7, 9), 16) / 255
    };
  } else {
    throw new Error("Invalid hex string: " + hex);
  }
};
