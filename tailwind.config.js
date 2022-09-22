/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      darkblue: '#172848',
      blue: '#5d6d9d',
      lightgray: '#f0efec',
      white: '#fff',
    },
    height: {
      '90v': '90vh',
    },
    extend: {},
  },
  plugins: [],
}
