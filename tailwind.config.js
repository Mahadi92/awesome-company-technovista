module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#058192",
        },
        secondary: {
          DEFAULT: "#2F4776",
        },
        tertiary: {
          DEFAULT: "#FF5529",
        },
        gray: {
          DEFAULT: "#333333",
          light: "#999999",
        },
      },
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "4xl": "2024px",
    },
  },
  plugins: [],
};
