const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./source/**/*.{js,jsx,html}'],

  darkMode: 'class',

  theme: {

    extends: {
      fontFamily: {
        'nexa': ['nexa', 'sans-serif']
      },
    },

    screens: {
      'phones': '360px',
      'tablets': '1000px',
      'laptop': '1440px',
      'default': '1520px'
    }

  },

}