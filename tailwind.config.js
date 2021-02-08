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
    maxWidth: {
      con: "1200px",
    },
    letterSpacing: {
      heroWide: ".7rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/src/assets/hero_image_01.jpg')",
        svg: "url('/src/assets/svg_bck.svg')",
        about: "url('/src/assets/bck_about.jpg')",
        breakOne: "url('/src/assets/bck_microphone.jpg')",
        gradient:
          "radial-gradient(circle, rgba(0,0,0,0) 43%, rgba(47,47,47,1) 100%)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@mjwebs/tailwindcss-frosted")],
};
