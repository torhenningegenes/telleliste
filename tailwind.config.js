module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "sky-50": "#ecfeff",
        "sky-100": "#cffafe",
        "sky-500": "#0ea5e9",
        "sky-700": "#0369a1",
        "sky-800": "#075985",
        "lime-400": "#a3e635",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
