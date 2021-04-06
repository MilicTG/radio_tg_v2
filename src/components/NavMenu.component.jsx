import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: { x: 0 },
  closed: {
    x: "100%",
    transition: {
      delay: 0.2,
    },
  },
};

const NavMenu = ({ hidden }) => {
  return (
    <motion.nav
      variants={variants}
      initial="closed"
      exit="closed"
      animate={hidden ? "open" : "closed"}
      transition={{ damping: 300 }}
      className="fixed z-30 w-full h-full bg-white top-20 right-0 py-16 items-start list-none text-center text-gray-800"
    >
      <ul className="w-screen h-auto">
        <li className="cursor-pointer w-full p-3 hover:text-blue-400 transition-all">
          Emisije
        </li>
        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">
          Marketing
        </li>
        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">
          Kontakt
        </li>
        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">
          Aplikacija
        </li>
        <li className="h-full w-full p-3">
          <button className="bg-blue-400 p-4 w-full text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
            RTG Music
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavMenu;
