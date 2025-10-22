import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1024px", xl: "1200px", "2xl": "1400px" } },
    extend: {
      fontFamily: { brand: ["Inter", "ui-sans-serif", "system-ui"] },
      colors: {
        brand: {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
} satisfies Config
