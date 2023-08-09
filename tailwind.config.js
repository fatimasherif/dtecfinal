/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  darkMode: false,
  theme: {
    extend: {
      gridAutoRows: {
        "2fr": "minmax(0, 2fr)",
      },
    },
  },
  variants: {},
  plugins: [],
};
