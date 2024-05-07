/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // wall: "url('wall.jpg')",
        // wall: "url('mainPic.jpg')",
        shopwall: "url('shopWall.jpg')",
      },
      colors: {
        primary: "#0284c7",
        primarydark: "#0c4a6e",
        secondarydark: "#431407",
        secondarytrans: "#43140786",
        white: "#ffff"
      },
      fontFamily: {
        "sans-serif": ["Josefin Sans", "sans-serif"],
        domion: ["Damion", "cursive"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-ultraSlow": "spin 12s linear reverse infinite",
      },
    },
  },
  plugins: [],
};
