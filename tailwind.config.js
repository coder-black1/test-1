/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brand-one": "rgb(17 19 43)",
        "brand-four": "rgb(102 73 169)",
        "brand-three": "rgb(206 172 216)",
        "brand-two": "rgb(115 122 153)"
      }
    },
  },
  plugins: [],
}