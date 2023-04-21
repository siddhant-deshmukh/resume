/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xsm:'450px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}
