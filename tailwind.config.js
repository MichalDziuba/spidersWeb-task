/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        primary: ["var(--raleway-font)", ...fontFamily.sans],
        secondary: ["var(--quicksand-font)", ...fontFamily.serif],
      },
      colors: {
        primary: "#1A1B1D",
        secondary: "#ACAFBA",
        blue: "#4763EE",
        lightblue: "#8C9DF3",
        disabled: "#9194A3",
        promo: "#EDA848",
        background:"#F8F8FA",
      },
      height: {
        itemHeight:'508px'
      },
      width: {
        itemWidth:'318px',
      },
      screens: {
        'mobile':'375px',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
