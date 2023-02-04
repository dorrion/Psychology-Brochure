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
        shadowColor: '#D9D9D9',

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
      rotate: {
        30: '30deg',
      },
      // figma에서 쓰던 font size 추가
      fontSize: {
        // 36px
        '6xl': [
          '2.25rem',
          {
            lineHeight: '3.25rem',
          },
        ],
        // 30px
        '5xl': [
          '1.875rem',
          {
            lineHeight: '2.688rem',
          },
        ],
        // 24px
        '4xl': [
          '1.5rem',
          {
            lineHeight: '2.188rem',
          },
        ],
        // 20px
        '3xl': [
          '1.25rem',
          {
            lineHeight: '1.813rem',
          },
        ],
        // 18px
        '2xl': [
          '1.125rem',
          {
            lineHeight: '1.625rem',
          },
        ],
        // 15px
        xl: [
          '0.938rem',
          {
            lineHeight: '1.375rem',
          },
        ],
        // 13px
        lg: [
          '0.813rem',
          {
            lineHeight: '1.188rem',
          },
        ],
        // 12px
        base: [
          '0.75rem',
          {
            lineHeight: '1.063rem',
          },
        ],
        // 10px
        sm: [
          '0.625rem',
          {
            lineHeight: '0.875rem',
          },
        ],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@headlessui/tailwindcss'),
  ],
};
