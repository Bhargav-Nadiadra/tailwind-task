/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1199px",
        "2xl": "1339px",
      },
      container: {
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: "#FFC555",
        },
        light: {
          DEFAULT: "#999999",
        },
        black: {
          DEFAULT: "#1C1C1C",
        },
        grey: {
          DEFAULT: "#F6F6F6",
        },
        heading: {
          DEFAULT: "#454545",
        },
      },
    },
    plugins: [],
  },
};
