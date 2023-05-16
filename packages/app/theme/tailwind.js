// @ts-check

/** @type {import('tailwindcss').Config['theme']} */
const colors = require("tailwindcss/colors");
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
  colors: {
    blueGray: {
      100: "rgba(241, 245, 249, 1)",
      200: "rgba(226, 232, 240, 1)",
      300: "rgba(148, 163, 184, 1)",
      400: "rgba(148, 163, 184, 1)",
      500: "rgba(100, 116, 139, 1)",
      600: "rgba(71, 85, 105, 1)",
      700: "rgba(51, 65, 85, 1)",
      800: "rgba(30, 41, 59, 1)",
    },
    transparent: "transparent",
    current: "currentColor",
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    emerald: colors.emerald,
    indigo: colors.indigo,
    yellow: colors.yellow,
  },
  borderWidth: {
    DEFAULT: "1px",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
};

module.exports = {
  theme,
};
