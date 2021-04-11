import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiArrowToTop } from "react-icons/all";

const BtnToTop = ({ show, click }) => {
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
          show
            ? "fixed z-50 bottom-10 right-5 lg:bottom-24 lg:right-10 flex justify-center items-center  w-12 h-12 rounded-full bg-blue-400 shadow-lg transition duration-500 ease-linear"
            : "hidden fixed bottom-10 justify-center items-center right-10 w-12 h-12 rounded-full transition duration-500 ease-linear"
        }
      >
        <BiArrowToTop size="2rem" className="text-white" />
      </motion.div>
    </AnimatePresence>
  );
};

export default BtnToTop;
