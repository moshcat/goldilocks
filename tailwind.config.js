/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'goldi-primary': '#f6e3da',
        'goldi-blue': '#0000fe',
        'goldi-yellow': '#ffdb01',
        'goldi-orange': '#ff5a00',

        'goldi-black': '#000000', //netral
        'goldi-white': '#ffffff', //netral
        'goldi-accent': '#99948f', // neural text
      },
    },
    fontFamily: {
      Figtree: ['Figtree, sans-serif'],
    },
    container: {
      padding: '2rem',
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
}
