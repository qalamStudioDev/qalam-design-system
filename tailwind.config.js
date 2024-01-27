/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#b75580",
          default: "#b75566",
          dark: "#b75566",
        },
        secondary: {
          light: "#7d6a8e",
          default: "#7d6a8e",
          dark: "#7d6a8e",
        },
        text: "#000000",
      },
      transitionDuration: {
        default: "500ms",
      },
      borderRadius: {
        default: "0.75rem",
      },
    },
  },
  plugins: [],
};
