/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set your custom font as the default
      },
      colors: {
        'lime-1000': '#B6EF11',
        'lime-1200': '#83B000',
        'black-100': '#0D0D0C',
      },
    },
  },
  plugins: [],
}
