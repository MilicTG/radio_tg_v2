import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BtnMain = ({ click }) => {
  return (
    <AnimatePresence>
      <motion.button
        onClick={click}
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
        className="px-8 py-4 text-white rounded-md cursor-pointer group hover:bg-blue-400 transition-all flex justify-center items-center shadow-lg bg-white"
      >
        <p className="text-gray-900 group-hover:text-white">
          Slusajte nas uzivo
        </p>
      </motion.button>
    </AnimatePresence>
  );
};

export default BtnMain;
