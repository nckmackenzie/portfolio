/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-200': '#FFC864',
        'primary-300': '#FFB939',
        'primary-400': '#FFA500',
        'primary-600': '#C68000',
        'primary-800': '#9B6500',
        // accent
        'accent-200': '#705BC4',
        'accent-300': '#523AB5',
        'accent-400': '#3315B0',
        'accent-600': '#270F88',
        'accent-800': '#1D0A6B',
        //grays
        'grayish-light': '#E5E5E5',
        'grayish-dark': '#111827',
      },
    },
    fontFamily: {
      headings: ['Merriweather', 'serif'],
      bodytext: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
};
