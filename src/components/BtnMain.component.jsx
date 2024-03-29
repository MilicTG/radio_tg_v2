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
        className="w-40 py-4 mx-8 my-4 text-white rounded-md cursor-pointer group 
        hover:bg-blue-400 transition-all flex justify-center items-center shadow-lg bg-white"
      >
        <p className="text-gray-900 group-hover:text-white flex flex-row items-center">
          RTG uživo
        </p>
      </motion.button>
    </AnimatePresence>
  );
};

export default BtnMain;
