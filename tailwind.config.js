
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B4F3F",   // brown
        secondary: "#F5EFE6", // beige
        muted: "#7A7A7A",
        background: "#FAFAFA",
      },
      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
};
