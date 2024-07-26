// const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#636f65',
        primary: '#95978a',
        'primary-light': '#b3b8a2',
        'secondary-dark': '#24303c',
        secondary: '#3c5057',
        'secondary-light': '#91a3a7',
        'tertiary-dark': '#905336',
        tertiary: '#c8a68d',
        'tertiary-light': '#e3d1bf',
        'accent-dark': '#a97237',
        accent: '#b48b5f',
        'accent-light': '#d2b589',
        'ink-dark': '#1b1c21',
        ink: '#474340',
        'ink-light': '#979694',
        'paper-dark': '#ab9e96',
        paper: '#e3d0bf',
        'paper-light': '#ffffff',
      },
    },
    // ...theme,
  },
  plugins: [require('@tailwindcss/typography')],
}
