/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Update this path to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0c0c0c',
        primary: '#0d0d0d',
        secondary: '#ffffff',
        text1: '#ffffff',
        text2: '#ffffff',
        text3: 'rgb(204, 0, 0)',
        overlay: 'rgba(12, 12, 12, 0.63)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        marcellus: ['Marcellus', 'serif'],
      },
    },
  },
  plugins: [],
};
