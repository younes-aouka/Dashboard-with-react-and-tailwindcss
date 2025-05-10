/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors:{
        'main-color': 'rgb(44 186 173)',
        'special-txt-color': '#A0AEC0',
      },
      backgroundColor:{
        'mainBg-color': '#EDF2F7',
      },
      screens: {
        'xlg': '1200px'
      },
      boxShadow:{
        '1': '0 4px 4px #0000001f'
      },
      gridTemplateColumns:{
        '1.8fr-1.2fr': '1.8fr 1.2fr',
      }
    },
  },
  plugins: [],
}

