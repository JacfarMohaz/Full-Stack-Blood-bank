/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primeryColor: "#b22650",
        seconderyColor: "#b14f6c",
        thirdColor: "#b07888",
        textColor: "#fbf8f9",
        fourthColor: "#afa2a4"
      }
    },
  },
  plugins: [],
}

