/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0F",
        panel: "#15151B",
        cream: "#F5F0E8",
        muted: "#B8B0A3",
        gold: "#D6A85A",
        goldSoft: "#E0B76A",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(214,168,90,0.18)",
        soft: "0 24px 80px rgba(0,0,0,0.38)",
      },
    },
  },
  plugins: [],
};
