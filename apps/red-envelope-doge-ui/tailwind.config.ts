import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        envelope: {
          50: "#FFF1F0",
          100: "#FFE4E3",
          200: "#FFC7C5",
          300: "#FFA39E",
          400: "#FF7875",
          500: "#FF4D4F",
          600: "#F5222D",
          700: "#CF1322",
          800: "#A8071A",
          900: "#820014",
        },
        ingot: {
          50: "#FFFDF0",
          100: "#FFF9D9",
          200: "#FFF3A8",
          300: "#FFE77A",
          400: "#FFDD4D",
          500: "#FFD700",
          600: "#D4B106",
          700: "#AA8B0B",
          800: "#806A0F",
          900: "#594D11",
        },
        nightsky: {
          50: "#F5F5FF",
          100: "#EDEDFF",
          200: "#D6D6FF",
          300: "#B3B3FF",
          400: "#7A7AB3",
          500: "#1F1F3D",
          600: "#18183D",
          700: "#13133D",
          800: "#0E0E2E",
          900: "#09091F",
        },
      },
      animation: {
        'gradient-xy': 'gradient-xy 3s ease infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      textShadow: {
        'glow': '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};

export default config;
