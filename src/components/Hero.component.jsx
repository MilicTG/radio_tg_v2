import React from "react";
import { motion } from "framer-motion";
import BtnPlay from "./BtnPlay.component";
import {
  revealHeaderText,
  revelTextScaleAnimation,
} from "../animations/animations";

const Hero = ({ showPlayer }) => {
  return (
    <header className="h-screen">
      <div className="h-screen bg-hero bg-fixed bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <div className="absolute inset-0 bg-gray-700 opacity-60" />
        <div className="w-full max-w-con flex h-full flex-col justify-center items-center">
          <div className="my-28 z-10 flex justify-center flex-col items-center">
            <motion.h1
              variants={revealHeaderText}
              initial="hidden"
              animate="show"
              className="text-3xl md:text-5xl lg:text-8xl text-white m-0 lg:tracking-heroWide"
            >
              Radio Tomislavgrad
            </motion.h1>
            <motion.h3
              variants={revelTextScaleAnimation}
              initial="hidden"
              animate="show"
              className="text-xl md:text-2xl lg:text-3xl text-white font-thin my-3 tracking-wider lg:tracking-heroWide"
            >
              95.1,95.9 i 103.3Mhz
            </motion.h3>
          </div>
          <div className="flex justify-center items-center z-10">
            <BtnPlay click={showPlayer} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
