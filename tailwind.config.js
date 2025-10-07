/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#acb625",
          dark: "#0f172a",
          light: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
