/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      soft: ["Poppins"],
      hard: ['"Roboto Slab"'],
      logo: ["Cookie"],
    },
    extend: {
      animation: {
        fade: "fade 1s ease-in-out forwards",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
