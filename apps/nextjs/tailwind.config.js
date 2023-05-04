const { theme } = require("@acme/app/design/tailwind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
  theme: {
    ...theme,
  },
};
