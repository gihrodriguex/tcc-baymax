/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blue':'#000718',
      'white': 'rgb(255 255 255);',
      'gray': '#3C3C3C',
      'bluee':'#010D2C',
      'azul-claro':'#3563D2',
      'red': 'rgba(175, 18, 37, 0.75)',
      'reed': '#D4132B',
      'whitee' : 'rgba(255, 255, 255, 0.75)',
      'whiteee' : 'rgba(255, 255, 255, 0.5)',
    },
    fontFamily:{
      'poppins':'"Poppins"',
      'montserrat':'"Montserrat"'
    }
  },
  plugins: [],
}