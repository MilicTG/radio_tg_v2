import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../helpers/useScroll";
import { lineFromLeftAnimation } from "../animations/animations";

const SectionTitle = (props) => {
  const [element, controls] = useScroll();

  return (
    <div className="mt-3 mb-5">
      <h2 className="text-3xl mb-1 text-gray-800">{props.title}</h2>
      <motion.div
        variants={lineFromLeftAnimation}
        initial="hidden"
        animate={controls}
        ref={element}
        className="w-28 h-1 rounded bg-blue-700"
      />
    </div>
  );
};

export default SectionTitle;
