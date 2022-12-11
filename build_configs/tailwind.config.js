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
      'desktop': '1550px'
    }

  },


}