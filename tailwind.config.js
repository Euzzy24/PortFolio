/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1a0b2e", // Remove semicolon here
        secondary: "#11071f",
        lightViolet: "rgba(182, 141, 240, 1)",
        dimBlue: "#7de7eb",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        greatvibes: ["Great Vibes", "cursive"],
        chilanka: ["Chilanka", "cursive"],
      },
      boxShadow: {
        dual: "-2px -2px 6px rgba(0, 0, 0, 0.5), 2px 2px 6px rgba(138, 43, 226, 0.5)",
        blackie: "-1px -1px 6px rgba(138, 43, 226, 0.5)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    keyframes: {
      "bounce-arrow": {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(10px)" },
      },
    },
    animation: {
      "bounce-arrow": "bounce-arrow 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
