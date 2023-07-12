/** @type {import('tailwindcss').Config} */

const primary = '#FF397F';
const primaryDark = '#EB0052';
const gray = '#A6A6A6';
const lightGray = '#CACACA';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#FF397F',
      secondary: '#45CAFF',
      white: '#FAFAFA',
      gray,
      lightGray,
      black: '#0D0D0D',
      dark: '#272727',
      error: '#FF3434',
      button: {
        hoverBackgroundGray: lightGray,
        hoverBackgroundPrimary: primaryDark,
      },
    },
  },
  plugins: [],
};
