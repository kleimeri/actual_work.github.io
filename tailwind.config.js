/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
  ],
   purge: [
    './pages/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

