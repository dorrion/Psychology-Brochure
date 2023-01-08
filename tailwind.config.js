/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}', // pages 안에 있는 애들 모두 적용
    './components/**/*.{js,ts,jsx,tsx}', // components 안에 있는 애들 모두 적용
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backgroundColor: '#EDEDED',
        primaryColor: '#FFC05C',
        secondaryColor: '#6D9A75',
        customGreen: '#20C770',
        customBlue: '#015BFF',
        customYellow: '#FFCC00',

        interview: {
          100: '#F2E2C6',
          200: '#C9B99D',
          300: '#8EB695',
          400: '#7DB1D0',
          500: '#7E75A0',
          600: '#FFC05C',
        },
      },
      backgroundImage: {
        potato: "url('../public/images/감자배경.webp')",
        soil: "url('../public/images/땅.webp')",
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '95v': '95vh',
        '100v': '100vh',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@headlessui/tailwindcss'),
  ],
};
