/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'neueMachina': ['Neue Machina ', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
