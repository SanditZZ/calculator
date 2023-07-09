/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        primary: "#61DAFB",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "grey": "#606060",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
  },
},
  plugins: [],
}

