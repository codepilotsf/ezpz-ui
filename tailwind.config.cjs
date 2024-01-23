/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts,md}"],

  theme: {
    extend: {}
  },

  /* Breakpoints
      ------------------------------------- */
  screens: {
    sm: '481px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },

  plugins: []
};

module.exports = config;