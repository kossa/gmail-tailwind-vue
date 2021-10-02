const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        'flip': '-1',
      },
      fontSize: {
        'xxs': '.625rem',
      },
      colors: {
        lime  : colors.lime,
        sky   : colors.sky,
        orange: colors.orange,
        indigo: colors.indigo,
        cyan: colors.cyan,
      },
      rotate: {
        '135': '135deg',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
