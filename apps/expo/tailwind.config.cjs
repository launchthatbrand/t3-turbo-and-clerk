// @ts-check
const { theme } = require("@acme/app/design/tailwind/theme");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["/src/**/*.{js,jsx,ts,tsx}", "../../packages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    ...theme,
  },
  plugins: [],
};
