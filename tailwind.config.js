module.exports = {
  mode: "jit",
  corePlugins: { gridAutoColumns: false },
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkColor: "#042F20",
      gray: {
        lighter: "#F4F5F5",
        light: "#E4E7E6",
        DEFAULT: "#949E9B",
        dark: "#626C69",
      },
      lightColor: "#F6FEFB",
      primaryColor: "#11BD82",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
