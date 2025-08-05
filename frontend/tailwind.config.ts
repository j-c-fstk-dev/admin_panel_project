import type { Config } from "tailwindcss";

export default {
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],


  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3B82F6",
          50: "#EBF2FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#2563EB"
        },
        success: {
          DEFAULT: "#10B981",
          500: "#10B981",
          600: "#059669"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;