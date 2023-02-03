/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'primary-100': '#ffe4b3',
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
        'grayish-dark-card': '#414652',
      },
    },
    fontFamily: {
      headings: ['Merriweather', 'serif'],
      bodytext: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
