/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui-lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea580c",

        ["bg-light"]: "#f1f5f9",
        ["bg-dark"]: "#292524",
        // to use on button hoover or cards
        ["bg-accent"]: "#e7e5e4",
        ["bg-accent-dark"]: "#292524",
        // to use on popups or "floats"
        ["bg-secondary"]: "#f5f5f4",
        ["bg-secondary-dark"]: "#1c1917",
        //title
        heading1: "#1e293b",
        ["heading1-dark"]: "#e5e5e5",
        //subtitle
        heading2: "#525252",
        ["heading2-dark"]: "#a3a3a3",

        txt: "#171717",
        ["txt-dark"]: "#fafafa",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
