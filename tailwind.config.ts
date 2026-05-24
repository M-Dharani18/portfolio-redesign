import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],        // default body font
        heading: ["Space Grotesk", "sans-serif"], // for headings
      },
      keyframes: {
      "move-left": {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(-50%)",
        },
      },
    },

    animation: {
      "move-left": "move-left 30s linear infinite",
    },
    },
  },
  plugins: [],
};
export default config;
