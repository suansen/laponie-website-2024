import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: { 7: "7" },

      // font size
      fontSize: {
        h1: "7.375rem",
        h2: "5.25rem",
        h3: "3.125rem",
        h4: "2rem",
        h5: [
          "1.75rem",
          {
            letterSpacing: "4.72px",
          },
        ],
        sh1: "1.5rem",
        sh2: "1.25rem",
        // nav: ["1rem"],
        p: "1.125rem",
        "p-sm": "0.935rem",
        logo: "2rem",
      },
      // font family
      fontFamily: {
        sans: ["var(--font-bellefair)", ...defaultTheme.fontFamily.sans],
        secondary: ["var(--font-montserrat)", "sans-serif"],
        laponie: ["var(--font-laponie)", "sans-serif"],
        tuesday: ["var(--font-tuesday-night)", "cursive"],
        "chinese-cursive": ["var(--font-long-cang)", "cursive"],
      },
      colors: {
        "tw-black": "#0B0D17",
        "tw-brown-dark": "#352f31",
        "tw-green": "#868686",
        "tw-pink-v-light": "#fdf2ee",
        "tw-light-pink": "#EFCFD4",
        "tw-pink": "#ecbdc4",
        "tw-secondary": "#E3DDCF",
        "tw-gray-light": "F2EFE8",
        "tw-white-off": "#f3f2ed",
        "tw-primary-light": "#f9f3e2",
        "tw-primary": "#E5CFB7",
        "tw-primary-dark": "#A99080",
        "tw-primary-v-light": "#FEFCF3",
        "tw-primary-pink": "#DBA39A",
        "tw-text-black": "#333333",
        "tw-logo": "#98802f",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "animate-stroke": {
          "0%": {
            fill: "#98802f",
            stroke: "#transparent",
            strokeWidth: "0",
            strokeDashoffset: "-25%",
            strokeDasharray: "32% 0",
          },
          "50%": { fill: "transparent", stroke: "#E5CFB7", strokeWidth: "3" },
          "80%, 100%": {
            fill: "transparent",
            stroke: "#98802f",
            strokeWidth: "3",
            strokeDashoffset: "25%",
            strokeDasharray: "0 32%",
          },
        },
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
        "stroke-text": "animate-stroke 3s linear infinite alternate",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#E5CFB7",
              foreground: "#000000",
            },
            warning: {
              DEFAULT: "#DBA39A",
              foreground: "#000000",
            },
            focus: "#E5CFB7",
          },
        },
      },
    }),
  ],
};
export default config;
