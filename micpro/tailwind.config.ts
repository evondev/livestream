import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1F2326",
        dark1: "#81879D",
        primary: "#1663F9",
        secondary: "#FFDB8F",
        grayf1: "#F1F5F9",
        grayf2: "#F2F3F8",
        gray17: "#171717",
        grayea: "#EAEDF9",
      },
      backgroundImage: {
        gradientPink: "linear-gradient(158deg, #D555C7 14.46%, #F396EA 79.18%)",
        gradientMix: `linear-gradient(90deg, #5F45D9 -11.43%, #F961D8 47.91%, #FE9E66 92.14%);
        `,
        gradientBlue: `linear-gradient(243deg, #9A40E4 7.82%, #5C70F4 74.31%);`,
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        poppins: ["var(--font-poppins)"],
      },
      spacing: {
        120: "7.5rem",
        70: "4.375rem",
        30: "1.875rem",
      },
    },
  },
  plugins: [],
};
export default config;
