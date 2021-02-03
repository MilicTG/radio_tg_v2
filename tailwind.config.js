module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Lato"],
      body: ["Lato", "Open Sans"],
    },
    minWidth: {
      con: "1200px",
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/src/assets/hero_image_01.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@mjwebs/tailwindcss-frosted")],
};
