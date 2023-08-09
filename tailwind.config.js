/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridAutoRows: {
        "2fr": "minmax(0, 2fr)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
