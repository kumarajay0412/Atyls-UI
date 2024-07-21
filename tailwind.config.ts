import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A96FF",
          100: "#4A96FF",
        },
        gray: {
          DEFAULT: "#FFFFFF",
          100: "#FFFFFF",
          90: "#C5C7CA",
          80: "#7F8084",
          70: "#6B6C70",
          60: "#27292D",
          50: "#35373B",
        },
        bBlack: {
          DEFAULT: "#000000",
          100: "#000000",
          90: "#191920",
        },
        red: {
          DEFAULT: "#FF5630",
          100: "#FF5630",
        },
      },
      fontSize: {
        heading3: [
          "1rem",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        heading4: [
          "1.75rem",
          {
            lineHeight: "33.89px",
            fontWeight: "500",
          },
        ],
        heading5: [
          "1.125rem",
          {
            lineHeight: "21.78px",
            fontWeight: "600",
            letterSpacing: "0.48px",
          },
        ],
        heading6: [
          ".875rem",
          {
            lineHeight: "16.94px",
            fontWeight: "500",
            letterSpacing: "0.48px",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
