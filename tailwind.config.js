/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E8E8E8",
        "gray-50": "#828282",
        "gray-100": "#333333",
        "gray-200": "#BDBDBD",
        "gray-500": "#4F4F4F",
        "primary-500": "#DC2626",
        "secondary-500": "#1D1D1D",
        // Semantic theme tokens (see src/index.css for the CSS variables
        // these resolve to, and their `html.light` overrides).
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        chrome: "rgb(var(--color-chrome) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--color-ink-soft) / <alpha-value>)",
        "ink-muted": "rgb(var(--color-ink-muted) / <alpha-value>)",
        hairline: "rgb(var(--color-hairline) / <alpha-value>)",
        hero: "rgb(var(--color-hero) / <alpha-value>)",
      },
      letterSpacing: {
        'extra-wide': '0.3em', 
        'super-wide': '0.6em',
        'header-wide': '0.9em',

      },
      fontFamily: {
        accent: ["Noto Sans", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}