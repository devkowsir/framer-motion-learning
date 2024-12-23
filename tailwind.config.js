import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/index.html", "src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: "1rem",
      center: true,
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
