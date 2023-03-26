/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          "background": "#004A7E",
          "text": "#092C45",
          "primary": "#4ECBFB",
          "secondary": "#74FFE0",
          "tertiary": "#FE8975",
        },
        light: {
          "background": "#FAF9F6",
          "text": "#fff",
          "primary": "#136FB4",
          "secondary": "#4EE2C1",
          "tertiary": "#FF5537",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
