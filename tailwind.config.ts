/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from "tailwindcss";

import { palette } from "./theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line import/no-extraneous-dependencies, global-require, @typescript-eslint/no-var-requires, @typescript-eslint/dot-notation
          ...require("daisyui/src/theming/themes")["light"],
          ...palette,

          "--rounded-btn": "0.625rem",
          "--rounded-box": "0.625rem",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
