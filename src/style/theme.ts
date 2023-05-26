import type { DefaultTheme } from "styled-components";

export const colors = {
  // grayscale
  black: "#222222",
  grey1: "#888888",
  grey2: "#BBBBBB",
  grey3: "#D7D7D7",
  grey4: "#F6F6F6",
  white: "#FFFFFF",

  // color
  red: "#FF453A",
  green: "#32D74B",
  blue: "#0A84FF",
  orange: "#FF9F0A",

  lightRed: "#FFD0CE",
  lightGreen: "#CCF5D2",
  lightOrange: "#FFE7C2",

  htmlTheme: "#F75421",
  cssTheme: "#254BDD",
  jsTheme: "#FFCC02",
};

export const shadows = {
  small: "0px 1px 2px 0px rgba(0, 0, 0, 0.1)",
  medium: "0 4px 6px -1px rgb(0, 0, 0, 0.1), 0 2px 4px -2px rgb(0, 0, 0, 0.1)",
};

export type ColorsType = typeof colors;
export type ShadowsType = typeof shadows;

export const theme: DefaultTheme = {
  colors,
  shadows,
};
