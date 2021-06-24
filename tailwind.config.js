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
      player: "410px",
    },
    letterSpacing: {
      heroWide: ".7rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/src/assets/img_hero.jpg')",
        rtgMusicBg: "url('/src/assets/img_rtg_music.jpg')",
        locationBg: "url('/src/assets/img_location.jpg')",
        smartphoneBg: "url('/src/assets/img_smartphone.jpg')",
        svg: "url('/src/assets/svg_bck.svg')",
        about: "url('/src/assets/img_about.jpg')",
        breakOne: "url('/src/assets/bck_microphone.jpg')",
        breakTwo: "url('/src/assets/bck_open_field.jpg')",
        gradient:
          "radial-gradient(circle, rgba(0,0,0,0) 43%, rgba(47,47,47,1) 100%)",
        modalBg: "rgba(0,0,0,0.5)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
