/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust the path to match your files
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
        lightBg: '#ffffff',
        lightPrimary: '#ffffff',
        lightSecondary: '#000',
        lightText1: '#000',
        lightOverlay: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        marcellus: ['Marcellus', 'serif'],
        code: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
