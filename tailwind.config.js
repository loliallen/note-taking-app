const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        container: {
          700: '#100C17',
          500: '#1C1528',
          300: '#2F2442',
          100: '#473663',
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

