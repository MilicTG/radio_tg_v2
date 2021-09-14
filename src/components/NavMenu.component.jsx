import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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

const NavMenu = ({ hidden, close }) => {
  return (
    <motion.nav
      variants={variants}
      initial="closed"
      exit="closed"
      animate={hidden ? "open" : "closed"}
      transition={{ damping: 300 }}
      className="fixed z-30 w-full h-full lg:hidden bg-white top-20 right-0 py-16 items-start list-none text-center text-gray-800"
    >
      <ul className="w-screen h-auto">
        <li className="cursor-pointer w-full p-3 hover:text-blue-400 transition-all">
          <Link
            activeClass="active"
            to="shows"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={close}
          >
            Emisije
          </Link>
        </li>
        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">
          <Link
            activeClass="active"
            to="marketing"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={close}
          >
            Marketing
          </Link>
        </li>
        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={close}
          >
            Kontakt
          </Link>
        </li>
        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">
          <Link
            activeClass="active"
            to="docs"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={close}
          >
            Natječaji
          </Link>
        </li>

        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">
          <Link
            activeClass="active"
            to="app"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={close}
          >
            Aplikacija
          </Link>
        </li>
        <li className="h-full w-full p-3 mt-10">
          <Link
            activeClass="active"
            to="streams"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={close}
          >
            <span className="w-full bg-blue-400 px-20 py-4 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
              RTG programi
            </span>
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavMenu;
