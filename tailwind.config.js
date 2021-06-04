const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        100: '500px',
        200: '1000px',
      },
      height: {
        '12/100': '12%',
        9.5: '2.35rem',
        1000: '1000px',
        '10vh': '10vh',
        '70vh': '70vh',
        '80vh': '80vh',
      },
      maxHeight: {
        '1/10': '10%',
      },
      minHeight: {
        500: '500px',
      },
      width: {
        '1/16': '5.333333%',
        '1/10': '10%',
      },
      minWidth: {
        600: '600px',
        950: '950px',
      },

      inset: {
        '8/100': '8%',
        '11/100': '11%',
        '135/100': '135%',
        '38/100': '38.33333%',
        '47.5/100': '47.5%',
        '490/100': '490%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
