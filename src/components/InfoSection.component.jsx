import React from "react";
import { motion } from "framer-motion";

import SectionTitle from "./SectionTitle.component";
import { useScroll } from "../helpers/useScroll";

const scrollReveal = {
  hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const InfoSection = (props) => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      id={props.id}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="m-auto pt-12 pb-12 lg:pt-16 lg:pb-16 flex justify-center overflow-hidden"
    >
      <div className="max-w-con h-full flex flex-col px-4 lg:px-0 lg:flex-row lg:items-center justify-around overflow-hidden">
        <div
          className={
            props.order
              ? "w-full lg:w-2/6 py-10"
              : "w-full lg:w-2/6 py-10 order-2"
          }
        >
          <SectionTitle title={props.title} />
          <p className="mb-5 text-gray-900">{props.textOne}</p>
          <p className="mb-5 text-gray-900">{props.textTwo}</p>
          <p className="mb-5 text-gray-900">{props.textThree}</p>
        </div>
        <img
          src={props.image}
          className="h-72 lg:h-96 mb-4 rounded-md shadow-xl object-cover"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default InfoSection;
