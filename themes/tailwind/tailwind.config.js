module.exports = {
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'St. Jude Sans'",
          "'Open Sans'",
          "'Helvetica Neue'",
          "Helvetica",
          "arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
