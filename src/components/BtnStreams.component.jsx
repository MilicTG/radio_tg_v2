import { motion, AnimatePresence } from "framer-motion";

const BtnStreams = ({ click }) => {
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
        hover:bg-white transition-all flex justify-center items-center shadow-lg bg-gray-700 bg-opacity-70"
      >
        <p className="text-white group-hover:text-gray-900 flex flex-row items-center">
          RTG streamovi
        </p>
      </motion.button>
    </AnimatePresence>
  );
};

export default BtnStreams;
