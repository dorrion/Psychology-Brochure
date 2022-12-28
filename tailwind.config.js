/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // pages 안에 있는 애들 모두 적용
    './components/**/*.{js,ts,jsx,tsx}', // components 안에 있는 애들 모두 적용
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backgroundColor: '#EDEDED',
      },
    },
  },
  plugins: [],
};
