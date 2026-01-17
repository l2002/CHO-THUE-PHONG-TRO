/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.js"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      maxWidth: {
        600: "600px",
        1100: "1100px",
      },
      minWidth: { 300: "300px", 200: "200px" },
      backgroundColor: {
        primary: "#F5F5F5",
        secondary1: "#1266dd",
        secondary2: "#FF5723",
        "overlay-30": "rgb(0,0,0,0.3)",
        "overlay-70": "rgb(0,0,0,0.7)",
      },
      maxWidth: {
        600: "600px",
        1100: "1100px",
      },
    },
  },
  plugins: [],
};
