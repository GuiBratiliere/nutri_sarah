import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C87A68",
        "primary-dark": "#A85A48",
        secondary: "#5E7262",
        "bg-warm": "#FDFBF7",
        surface: "#F8F1EA",
        "text-main": "#2A2A2A",
        "text-muted": "#666666",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        display: ["var(--font-playfair-display)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;