/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "fm-",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        waving: "url('../assets/icons/waving-hand.png')",
        "pointing-right":
          "url('../assets/icons/backhand-index-pointing-right.png')",
        "nerd-face": "url('../assets/icons/nerd-face.png')",
      },
    },
  },
  plugins: [],
};
