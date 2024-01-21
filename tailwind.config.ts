import type { Config } from "tailwindcss";

// import pxToRem from '@/utils/pxToRem';


const colors = require("tailwindcss/colors");
const PRIMARY = {
  primary: "#F4623A",
  secondary: "#4C3B57",
  tertiary: "#4F3954",
};

const NEUTRAL = {
  black: "#191D24",
  white: "#FFFFFF",
  border: "#C9CFD9",
  bg: "#FAFAFA",
  commonBg:"F9FAFB",
  bodyText: "#64728C",
  sideBar: "#0F2657",
  greyBg: "#fafafa",
};

const ERROR = {
  150: "#910D2C",
  critical: "#DA1414",
  100: "#EF476F",
  50: "#FBD0DA",
};

const WARNING = {
  150: "#996B00",
  100: "#FFD166",
  50: "#FFF0CC",
};

const TINT = {
  250: "#82CAF2",
  200: "#B1DEF7",
  150: "#DFF1FC",
  100: "#E8F5FD",
  50: "#F1F9FE",
};

const SUCCESS = {
  500:"#039855",
  150: "#065031",
  100: "#0EAD69",
  50: "#D5FCEB",
};
const SHADE = {
  250: "#06293C",
  200: "#0B486A",
  150: "#106898",
  100: "#1587C6",
  50: "#26A3E8",
};

const GREY = {
  100: "#8A8A8A",
};

const BORDER = {
  primary: "#CDCED9",
  secondary: "#CDCED9",
};
const TEXT = {
  main: "#2E2C34",
  sub:"#5D5969",
  blue:"#19184E",
  offWhite:"#EBE7EF",
  
};

const palette = {
  brand: {
    ...PRIMARY,
  },
  success: {
    ...SUCCESS,
  },
  text: {
    ...TEXT,
  },
  shade: {
    ...SHADE,
  },
  tint: {
    ...TINT,
  },
  warning: {
    ...WARNING,
  },
  grey: {
    ...GREY,
  },
  error: {
    ...ERROR,
  },
  neutral: {
    ...NEUTRAL,
  },
  border: {
    ...BORDER,
  },
};
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
      colors:{
        ...colors,
        ...palette
      }
    },
  },
  plugins: [],
};
export default config;
