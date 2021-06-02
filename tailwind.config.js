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
        '1/12': '12%',
        9.5: '2.35rem',
        1000: '1000px',
        '10vh': '10vh',
        '80vh': '80vh',
      },
      maxHeight: {
        '1/10': '10%',
      },
      minHeight: {
        500: '500px',
        '86vh': '86vh',
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
        135: '135%',
        38: '38.33333%',
        '47-5': '47.5%',
        490: '490%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
