module.exports = {
  content: ['./source/**/*.{js,jsx,html}'],
  theme: {

    ripple: theme => ({
      colors: theme('colors')
    }),

    fontFamily: {
      'nexa': ['nexa', 'sans-serif']
    },

    screens: {
      'phones': '360px',
      // => @media (min-width: 360px)

      'tablets': '1000px',
      // => @media (min-width: 1000px)

      'laptop': '1440px',
      // => @media (min-width: 1440px) 

      'default' : '1520px'
      // => @media (min-width: 1520px) 
    }

  },


  plugins: [
    require('tailwindcss-ripple')()
  ]
}