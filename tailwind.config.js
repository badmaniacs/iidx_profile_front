/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: 'rgb(0 0 0)',
      bblack: 'rgb(24 24 27)',
      bbblack: 'rgb(9 9 11)',
      ttext: 'rgb(244 244 245)',
      white: 'rgb(255 255 255)',
      fcombo: 'rgb(9 196 246)',
      exhhard: 'rgb(254 239 2)',
      hard: 'rgb(255 255 255)',
      clear: 'rgb(90 222 237)',
      eclear: 'rgb(101 205 49)',
      aclear: 'rgb(165 129 241)',
      failed: 'rgb(153 153 153)',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
