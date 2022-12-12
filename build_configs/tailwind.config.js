module.exports = {
  content: ['./source/**/*.{js,jsx,html}'],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        'nexa': ['nexa sans-serif']
      },
      
      boxShadow: {
        "blue": '0px 0px 40px rgba(66,183,237,0.5)',
        "blue-extended": '0px 0px 60px rgba(66,183,237,0.5)',

      }
    },

    screens: {
      'tablets': '1000px',
      'laptop': '1440px',
      'desktop': '1550px'
    },


  },
  plugins : []


}