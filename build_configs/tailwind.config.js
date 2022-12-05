module.exports = {
  content: ['./source/**/*.{js,jsx,html}'],
  theme: {

    ripple: theme => ({
      colors: theme('colors')
    }),


    fontFamily: {
      'nexa': ['nexa', 'sans-serif']
    },

  },
  plugins: [
    require('tailwindcss-ripple')()
  ]
}