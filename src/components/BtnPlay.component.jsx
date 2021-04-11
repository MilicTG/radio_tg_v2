import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BtnPlay = () => {
  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 5,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="h-14 w-14 lg:h-16 lg:w-16 flex justify-center items-center shadow-lg bg-white rounded-full"
      >
        <FaPlay className="text-gray-800 h-6 w-6 lg:h-8 lg:w-8" />
      </motion.button>
    </AnimatePresence>
  );
};

export default BtnPlay;
