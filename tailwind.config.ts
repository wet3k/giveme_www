import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          blue: "#1e40af",
          cyan: "#0891b2",
          "blue-dark": "#3b82f6",
          "cyan-dark": "#22d3ee",
        },
        // Text colors
        text: {
          primary: "#1e3a5f",
          secondary: "#64748b",
          "primary-dark": "#f1f5f9",
          "secondary-dark": "#94a3b8",
        },
        // Background colors
        background: {
          DEFAULT: "#f1f5f9",
          dark: "#0f172a",
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#1e293b",
        },
        // Semantic colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #1e40af 0%, #0891b2 100%)",
        "gradient-primary-dark": "linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)",
        "gradient-subtle": "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
