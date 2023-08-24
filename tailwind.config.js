/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bblack: 'rgb(24 24 27)',
      bbblack: 'rgb(9 9 11)',
      ttext: 'rgb(224 224 245)',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
