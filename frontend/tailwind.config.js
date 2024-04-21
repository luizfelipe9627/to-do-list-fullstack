/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html,", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    lineHeight: {
      140: "140%",
    },
    colors: {
      "gray-100": "#F2F2F2",
      "gray-200": "#D9D9D9",
      "gray-300": "#808080",
      "gray-400": "#333333",
      "gray-500": "#262626",
      "gray-600": "#1A1A1A",
      "gray-700": "#0D0D0D",
      "purple": "#8284FA",
      "purple-dark": "#5E60CE",
      "blue": "#4EA8DE",
      "blue-dark": "#1E6F9F",
      "danger": "#E25858",
      "success": "#4CAF50",
    },
    extend: {
      keyframes: {
        rocket: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        "rocket-fire": {
          "0%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        rocket: "rocket 1s infinite",
        "rocket-fire": "rocket-fire 1s infinite",
      },
    },
  },
  plugins: [],
};
