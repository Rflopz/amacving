const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit', 
  purge: [ './src/**/*.svelte' ], 
  darkMode: 'class',
  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  theme: {
    colors: {
      ...colors,
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      blueGray: colors.blueGray,
      gray: colors.trueGray,
      warmGray: colors.warmGray,
      red: colors.red,
      sky: colors.sky,
      yellow: colors.amber,
    }
  }
}
