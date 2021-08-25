import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../helpers/useScroll";
import {
  lineFromLeftAnimation,
  revelTextScaleAnimation,
  revelTextFromLeft,
} from "../animations/animations";

import SectionTitle from "./SectionTitle.component";
import StreamCard from "./StreamCard.component";

import mainStreamImage from "../assets/img_stream_main.jpg";
import musicStreamImage from "../assets/img_stream_music.jpg";
import kidsStreamImage from "../assets/img_stream_kids.jpg";
import framaStreamImage from "../assets/img_stream_frama.jpg";
import strunicaStreamImage from "../assets/img_stream_strunica.jpg";
import patriotStreamImage from "../assets/img_stream_patriot.jpg";

const StreamsSection = ({
  startMainRadio,
  startRtgMusic,
  startRtgBastina,
  startRtgFrama,
  startRtgDjecji,
}) => {
  const [element, controls] = useScroll();

  return (
    <section
      id="streams"
      className="h-auto w-full px-4 xl:px-0 flex justify-center"
    >
      <div className="max-w-con w-full flex justify-start items-center z-10">
        <div className="py-20 w-full">
          <SectionTitle title="RTG streamovi" />
          <motion.p
            variants={revelTextFromLeft}
            initial="hidden"
            animate={controls}
            ref={element}
            className="text-base font-thin text-gray-900 mb-10"
          >
            Za svakoga ponešto
          </motion.p>
          <div className="w-full pt-2 pb-4 grid place-items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-7">
            <StreamCard
              image={mainStreamImage}
              title="RTG Uživo"
              onClick={() => {
                startMainRadio();
              }}
            />
            <StreamCard
              image={musicStreamImage}
              title="RTG Music"
              onClick={() => {
                startRtgMusic();
              }}
            />
            <StreamCard
              image={kidsStreamImage}
              title="RTG Dječji"
              onClick={() => {
                startRtgDjecji();
              }}
            />
            <StreamCard
              image={framaStreamImage}
              title="RTG Frama"
              onClick={() => {
                startRtgFrama();
              }}
            />
            <StreamCard
              image={strunicaStreamImage}
              title="RTG Baština"
              onClick={() => {
                startRtgBastina();
              }}
            />
            <StreamCard
              image={patriotStreamImage}
              title="RTG Domovina"
              onClick={() => {
                startRtgMusic();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamsSection;
