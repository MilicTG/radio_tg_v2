import React from "react";
import { FaCity, GoRadioTower, SiAudiomack } from "react-icons/all";
import { motion } from "framer-motion";
import { useScroll } from "../helpers/useScroll";
import { revelTextScaleAnimation } from "../animations/animations";

const BreakSectionTwo = () => {
  const [element, controls] = useScroll();

  return (
    <section className="w-full flex justify-center h-auto bg-breakTwo bg-fixed bg-center bg-cover">
      <motion.div
        variants={revelTextScaleAnimation}
        initial="hidden"
        animate={controls}
        ref={element}
        className="max-w-con w-full flex flex-col md:flex-row py-4 lg:py-8 justify-evenly items-center z-10"
      >
        <div className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
          <FaCity size="4rem" className="text-white" />
          <h5 className="text-2xl py-3">95.9 Mhz</h5>
          <div className="w-20 h-1 rounded bg-white" />
          <p className="pt-2">Tomislavgrad</p>
        </div>

        <div className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
          <GoRadioTower size="4rem" className="text-white" />
          <h5 className="text-2xl py-3">103.3 Mhz</h5>
          <div className="w-20 h-1 rounded bg-white" />
          <p className="pt-2">Općina Tomislavgrad</p>
        </div>

        <div className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
          <SiAudiomack size="4rem" className="text-white" />
          <h5 className="text-2xl py-3">95.1 Mhz</h5>
          <div className="w-20 h-1 rounded bg-white" />
          <p className="pt-2">Buško blato i okolica</p>
        </div>
      </motion.div>
    </section>
  );
};

export default BreakSectionTwo;
