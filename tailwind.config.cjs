/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "neutral-custom": {
          100: "#effaff",
        },
      },
      backgroundImage: {
        "main-color":
          "linear-gradient(180deg, #1F2937 0%, #27303F 29.17%, #2E3846 55.21%, #363F4E 77.6%, #3E4756 97.92%)",
      },
      fontFamily: {
        roboto: "'Inter', sans-serif",
        kanit: "'Kanit', sans-serif",
      },
    },
  },
  plugins: [],
};
