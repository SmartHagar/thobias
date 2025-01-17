/** @format */

/** @format */

import type { Config } from "tailwindcss";
import colors from "./src/utils/colors";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        linear: "linear-gradient(238deg, #a8d5ba 0%, #6bbf59 99.66%)",
        light: "url('/images/bg/terang.png')",
        dark: "url('/images/bg/gelap.png')",
      },
      fontFamily: {
        Lufga: ["Lufga", "sans-serif"],
        Merriweather: ["Merriweather", "serif"],
        Playfair: ["Playfair", "serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...colors,
        },
        dark: {
          ...colors,
        },
      },
    ],
  },
  plugins: [daisyui],
  darkMode: "class",
};
export default config;
