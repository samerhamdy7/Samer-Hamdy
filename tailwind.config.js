/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily:{
      primary: "orbitron",
      secondary : "Rajdhani",
      tertiary : "Aidrich"
    },
    container: {
      padding: {
        default: "15px"
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl : "1200px"
    },
    extend: {
      colors : {
        primary: "#0a0a0a",
        accent : "#8809c3"
      },
      
    },
  },
  plugins: [],
}

