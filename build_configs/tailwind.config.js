module.exports = {
  content: ['./source/**/*.{js,jsx,html}'],
  theme: {

    ripple: theme => ({
      colors: theme('colors')
    }),

    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    }

  },
  plugins: [
    require('tailwindcss-ripple')()
  ]
}