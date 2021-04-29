import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic } from "react-icons/all";

const BtnPlayerMin = ({ audio, click }) => {
  return (
    <AnimatePresence>
      <motion.div
        onClick={click}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 5,
        }}
        whileHover={{ scale: 1.09, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className={
          audio.playerTitle !== ""
            ? "fixed z-40 bottom-20 right-5 lg:bottom-44 lg:right-10 flex justify-center items-center  w-12 h-12 rounded-full bg-red-400 shadow-lg transition duration-500 ease-linear cursor-pointer"
            : "hidden fixed bottom-20 justify-center items-center right-10 w-12 h-12 rounded-full transition duration-500 ease-linear"
        }
      >
        <FaMusic size="1.3rem" className="text-white" />
      </motion.div>
    </AnimatePresence>
  );
};

export default BtnPlayerMin;
