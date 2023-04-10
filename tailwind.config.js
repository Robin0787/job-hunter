/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fourTwo': '4fr 2fr',
      }
    }
  },
  plugins: [],
}

