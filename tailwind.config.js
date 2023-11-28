/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "hsl(237, 18%, 59%)",
        accent: "hsl(345, 95%, 68%)",
        blue1: "hsl(236, 21%, 26%)",
        blue2: "hsl(235, 16%, 14%)",
        blue3: "hsl(234, 17%, 12%)",
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover"],
    },
  },
  plugins: [],
};
