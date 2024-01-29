/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fbf4f6",
          100: "#f7ecef",
          200: "#f1d9e0",
          300: "#e7bac6",
          400: "#d88ea1",
          500: "#c86c80",
          600: "#b75566",
          700: "#9a3c4a",
          800: "#80343e",
          900: "#6c2f37",
          950: "#40171c",
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
