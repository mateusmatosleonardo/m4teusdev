/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#1a202c",
          text: "#f9fafb",
        },
        rgba: "rgba(255, 255, 255, 0.1)"
      },
    },
  },
  plugins: [],
};
