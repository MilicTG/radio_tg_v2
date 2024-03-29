import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../helpers/useScroll";
import {
  lineFromLeftAnimation,
  revelTextScaleAnimation,
  revelTextFromLeft,
} from "../animations/animations";

import BtnFeature from "./BtnFeature.component";

const AndroidApp = () => {
  const [element, controls] = useScroll();

  return (
    <section
      id="app"
      className="h-auto w-full px-4 xl:px-0 flex justify-center bg-smartphoneBg bg-fixed bg-center bg-cover"
    >
      <div className="max-w-con w-full flex justify-start items-center z-10">
        <div className="py-20 w-full lg:w-5/6 xl:w-5/12">
          <motion.h3
            variants={revelTextFromLeft}
            initial="hidden"
            animate={controls}
            ref={element}
            className="text-3xl text-blue-400 mb-1"
          >
            Android aplikacija
          </motion.h3>
          <motion.div
            variants={lineFromLeftAnimation}
            initial="hidden"
            animate={controls}
            ref={element}
            className="w-32 h-1 rounded bg-white mb-3.5"
          />
          <motion.h2
            variants={revelTextScaleAnimation}
            initial="hidden"
            animate={controls}
            ref={element}
            className="text-6xl text-white mb-10"
          >
            Slusajte RTG i na vasem pametnom telefonu
          </motion.h2>
          <motion.p
            variants={revelTextFromLeft}
            initial="hidden"
            animate={controls}
            ref={element}
            className="text-white"
          >
            Preuzmite našu aplikaciju potpuno besplatno s Google play store-a.
            Nadoknadite propuštene emisije, slušajte RTG Music te još mnogo
            drugog sadržaja.
          </motion.p>
          <BtnFeature title="Preuzmite s Google play" />
        </div>
      </div>
    </section>
  );
};

export default AndroidApp;
