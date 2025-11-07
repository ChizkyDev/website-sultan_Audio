/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: 'oklch(70.5% 0.213 47.604)',
        secondary: 'oklch(55.4% 0.046 257.417)',
        dark: 'oklch(20.8% 0.042 265.755)'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
};
