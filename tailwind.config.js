/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '0px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1024px' },
      '2xl': { 'min': '1536px' },
    },
    colors: {
      main: '#4c1d95',
      gray: '#f8fafc',
      graybold: '#334155',
      grayline: '#cbd5e1',
      white: '#fff',
      background: '#eef2ff',
      tabletext: '#1e293b',
    },
    extend: {},
  },
  plugins: [],
}

