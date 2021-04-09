import React from "react";
import { BiRadio, HiMusicNote, BiNews } from "react-icons/all";
import { motion } from "framer-motion";
import { useScroll } from "../helpers/useScroll";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 6,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const BreakSectionOne = () => {
  const [element, controls] = useScroll();

  return (
    <section className="w-full flex justify-center h-auto bg-breakOne bg-fixed bg-center bg-cover">
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        ref={element}
        className="max-w-con w-full flex flex-col md:flex-row py-4 lg:py-8 justify-evenly items-center z-10"
      >
        <motion.div
          variants={item}
          className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center"
        >
          <BiRadio size="4rem" className="text-white" />
          <h5 className="text-2xl py-3">Uvijek s vama</h5>
          <div className="w-20 h-1 rounded bg-white" />
          <p className="pt-2">Slusajte nas od 0 do 24h</p>
        </motion.div>

        <div
          variants={item}
          className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center"
        >
          <HiMusicNote size="4rem" className="text-white" />
          <h5 className="text-2xl py-3">Najbolja glazba</h5>
          <div className="w-20 h-1 rounded bg-white" />
          <p className="pt-2">Biramo samo hitove</p>
        </div>

        <div
          variants={item}
          className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center"
        >
          <BiNews size="4rem" className="text-white" />
          <h5 className="text-2xl py-3">Informirajte se</h5>
          <div className="w-20 h-1 rounded bg-white" />
          <p className="pt-2">Uvijek donosimo najnovije vijesti</p>
        </div>
      </motion.div>
    </section>
  );
};

export default BreakSectionOne;
