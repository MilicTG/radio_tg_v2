import React from "react";
import {FaPlay} from "react-icons/fa";
import {motion, AnimatePresence} from "framer-motion"

const BtnPlay = () => {
    return (
        <AnimatePresence>
            <motion.button
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 5
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="h-20 w-20 flex justify-center items-center shadow-lg frosted rounded-full">
                <FaPlay className="text-gray-800 h-11 w-11"/>
            </motion.button>
        </AnimatePresence>

    );
};

export default BtnPlay;
