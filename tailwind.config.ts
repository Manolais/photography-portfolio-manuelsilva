import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '55/45': '55% 45%',
        '45/55': '45% 55%'
      },
      spacing: {
        '30vw': '30vw',
      },
    }
  },
  plugins: [],
});

export default config;
