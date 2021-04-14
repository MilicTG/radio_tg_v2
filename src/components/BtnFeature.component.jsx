import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const BtnFeature = ({ title, onClick }) => {
  return (
    <AnimatePresence>
      <motion.button
        onClick={onClick}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 3,
          duration: 5,
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="bg-blue-400 p-4 mt-20 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all"
      >
        {title}
      </motion.button>
    </AnimatePresence>
  );
};

export default BtnFeature;
