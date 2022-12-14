module.exports = {
  content: ['./source/**/*.{js,jsx,html,svg}'],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        'nexa': ['nexa sans-serif']
      },
      
      boxShadow: {
        "blue": '0px 0px 40px rgba(66,183,237,0.5)',
        "blue-extended": '0px 0px 60px rgba(66,183,237,0.5)',
      },

      backgroundColor: {
        'card-surface' : '#1A232C'
      },

      fontSize: {
        'title': '64px',
      },

      lineHeight: {
        'title': '73px',
      },

      borderRadius: {
        'card': '50px',
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