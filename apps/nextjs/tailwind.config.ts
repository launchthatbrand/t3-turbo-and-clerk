const { theme } = require("@acme/app/design/tailwind/theme");

import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [baseConfig],
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
} satisfies Config;