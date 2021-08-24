import { motion, AnimatePresence } from "framer-motion";

const StreamCard = ({ image, title, onClick }) => {
  return (
    <AnimatePresence>
      <motion.div
        onClick={onClick}
        className="w-full mb-6 relative cursor-pointer flex justify-center"
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
      >
        <img
          src={image}
          alt=""
          className="w-full h-36 mr-4 rounded-md shadow-lg object-cover"
        />
        <h5 className="absolute bottom-3 left-3 text-white text-2xl">
          {title}
        </h5>
      </motion.div>
    </AnimatePresence>
  );
};

export default StreamCard;
