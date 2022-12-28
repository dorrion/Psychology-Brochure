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
      },
      backgroundImage: {
        potato: "bg-[url('../public/images/감자배경.webp')]",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
