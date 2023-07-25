/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: { bubbleWater: ["bubbleWater"] },
      colors: {
        primary: "#3394A2",
      },
    },
  },
  plugins: [],
};