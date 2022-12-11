/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Navigation: "#161718",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
