/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInR: "fadeInR 0.8s ease-in",
        fadeInL: "fadeInL 0.8s ease-in",
      },
      keyframes: {
        fadeInR: {
          "0%": {transform: "translateX(25%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: '100' },
        },
        fadeInL: {
          "0%": {transform: "translateX(-25%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: '100' },
        },
      },
    },
  },
  plugins: [],
};
