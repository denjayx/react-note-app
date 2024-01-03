/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
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
        primary: {
          50: '#ecf6ff',
          100: '#dcefff',
          200: '#bfdfff',
          300: '#98c9ff',
          400: '#70a6ff',
          500: '#4e83ff',
          600: '#2f5cfc',
          700: '#2349df',
          800: '#1f40b4',
          900: '#223c8d',
          950: '#0c1431',
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
