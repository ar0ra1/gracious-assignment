/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rmGreen: `#60A17A`,
        rmBrown: `#44281d`,
        rmBeige: `#E99745`,
        rmGray: `#A2AABD`,
        rmBlue: `#37344F`,
        rmOrange: `#E4691E`,
        rmBG: `#FFFFFF`,
        rmDark: `#181818`,
        rmRed: `#E95257`,
        rmLight: `#FDFDFD`,
      },
    },
  },
  plugins: [],
};
