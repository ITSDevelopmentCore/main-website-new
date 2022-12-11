const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./source/**/*.{js,jsx,html}'],

  darkMode: 'class',

  corePlugins: {
    container: false
  },

  theme: {
    extends: {
      fontFamily: {
        'nexa': ['nexa', 'sans-serif']
      },
    },

    screens: {
      'tablets': '1000px',
      'laptop': '1440px',
      'desktop': '1920px'
    }

  },

  plugins : [
    function ({ addComponents }) {
      addComponents({
        '.container': {

          width: '100%',

          '@screen tablets': {
            width: '895px',
          },

          '@screen laptop': {
            width: '1330px',
          },

          '@screen desktop': {
            width: '1515px',
          },

        }
      })
    }
  ]

}