/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accentDeep: "var(--color-accent-deep)",
        backgroundLight: "var(--color-bg-light)",
        dark: "var(--color-dark)",
        light: "var(--color-light)",      
      },
    },
  },
  plugins: [],
};
