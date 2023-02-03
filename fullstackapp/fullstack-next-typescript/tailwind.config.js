/** @type {import('tailwindcss').Config} */
module.exports = {
  //this recognizes that app,pages,comp files and work with tailwind
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
