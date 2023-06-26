/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-3': 'var(--gray-3, #828282)',
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'noto': ['Noto Sans Japanese'],
      },
      boxShadow: {
        'button': '0px 2px 3px 0px rgba(51, 51, 51, 0.20)',
      }
    },
  },
  plugins: [],
}
