module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { gray: { light: "#F4F5F5", DEFAULT: "#cccccc" } },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
