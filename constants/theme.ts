const COLORS = {
  primary: "#7852A9",
  secondary: "#B284BE",
  tertiary: "#D7BFDC",

  black: "#121212",
  black2: "#0D0D0D",

  darkBackground: "#212121",
  darkDetailsBackground: "#2d2d30",
  darkerBackground: "#252526",

  placeholder: "#2d2d30",

  grey: "#363636",
  lightGrey: "#7f7f7f",
  lighterGrey: "#bbbbbb",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  green: "#33B864",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
  discoverHeader: "BNRegular",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
