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
      ttext: 'rgb(224 224 245)',
      white: 'rgb(255 255 255)',
      skyblue: 'rgb(125 211 252)',
      lime: 'rgb(132 204 22)',
      yellow: 'rgb(253 224 71)',
      purple: 'rgb(99 102 241)',
      red: 'rgb(234 88 12)',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
