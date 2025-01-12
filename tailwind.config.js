/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      animation: {
        blob: "blob 5s infinite",
      },
      keyframes: {
        blob: {
          "0%": { clipPath: "ellipse(43% 79% at 50% 50%)"},
          "33%": { clipPath: "ellipse(58% 62% at 70% 60%)" },
          "66%": { clipPath: "ellipse(78% 52% at 45% 62%)" },
          "100%": { clipPath: "ellipse(43% 79% at 50% 50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("tailwindcss-intersect")],
};
