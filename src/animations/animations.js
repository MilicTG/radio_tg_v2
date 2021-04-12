export const revealFromTopAnimation = {
  hidden: {
    y: -90,
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export const revealModal = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.6,
  },
};

export const revealHeaderText = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.9,
    },
  },
};

export const revelTextScaleAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
};

export const revelTextFromLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};

export const lineFromLeftAnimation = {
  hidden: { width: "0%" },
  show: {
    width: "90px",
    transition: { duration: 1 },
  },
};

export const sliderContainerAnimation = {
  hidden: { opacity: 0, scale: 0.99 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.15, duration: 0.5 },
  },
};
