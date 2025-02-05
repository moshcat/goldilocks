/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // base color
        'goldi-primary': '#f6e3da',
        'goldi-bg': '#ece6e8',
        'goldi-blue': '#0000fe',
        'goldi-yellow': '#ffdb01',
        'goldi-orange': '#ff5a00',

        // neutral color
        'goldi-black': '#000000',
        'goldi-white': '#ffffff',
        'goldi-accent': '#ddced3',

        // status
        'goldi-success': '#22c55e',
        'goldi-danger': '#dc2626',
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
