/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide-horizontal': {
          '&::-webkit-scrollbar': {
            height: '0px',
          },
          'scrollbar-height': 'none',
        },
      });
    },
  ],
}