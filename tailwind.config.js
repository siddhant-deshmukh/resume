/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./**/*.{html,js}"],
  theme: {
    // screens: {
    //   xsm:'450px',
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      screens:{
        lg: '940px'
      },
      colors: {
        // base: '#0b0c10',
        main: '#171c28',
        primary: 'white',
        'primary-light-1' : 'rgb(249 250 251)',
        'primary-light-2' : 'rgb(243 244 246)',
        'primary-light-3' : 'rgb(229 231 235)',
        // secondary: '#66fcf2'
        // secondary: '#007bff',
        'secondary': '#00f8f8',
        'secondary-1': '#00baba',
        'secondary-2': '#007c7c',
        'secondary-3': '#003e3e'
      }
    },
  },
  plugins: [],
}
