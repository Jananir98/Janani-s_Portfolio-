export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // new design system: pastel pink / deep navy
        bg: "#fff7f7",
        surface: "#fceff0",
        card: "rgba(255,255,255,0.6)",
        primary: "#10203a", // deep navy for headings
        accent: "#ff5ca8", // bright pink accent
        secondary: "#ffdede",
        muted: "#6b7280",
      },
      boxShadow: {
        glow: "0 0 40px rgba(167,139,250,0.25)",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}
