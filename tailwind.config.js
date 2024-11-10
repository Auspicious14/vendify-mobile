/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#2158E8",
        offWhite: "#E9EFFF",
        gray: "#F2F4F7",
      },
      textColor: {
        primary: "#2158E8",
        offWhite: "#E9EFFF",
        gray: "#475467",
      },
      borderColor: {
        primary: "#2158E8",
      },
      fontFamily: {
        sans: ["Ubuntu, sans-serif"],
      },
    },
  },
  plugins: [],
};
