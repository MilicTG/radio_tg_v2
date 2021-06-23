import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BtnPlay = ({ isPlaying, handlePlaying }) => {
  return (
    <AnimatePresence>
      <motion.button
        onClick={handlePlaying}
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
        className="h-14 w-14 mt-5 mb-5 lg:h-16 lg:w-16 flex justify-center items-center shadow-lg bg-blue-400 rounded-full"
      >
        {isPlaying ? (
          <FaPause className="text-white h-6 w-6 lg:h-8 lg:w-8" />
        ) : (
          <FaPlay className="text-white h-6 w-6 lg:h-8 lg:w-8" />
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default BtnPlay;
