import React, { useState } from "react";
import NavMenu from "./NavMenu.component";
import { motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import Logo from "../assets/logo_rtg_main.svg";
import LogoWhite from "../assets/logo_rtg_main_white.svg";

const Nav = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <motion.nav
      className={
        navbarBg || isHidden
          ? "fixed sticky w-full h-20 -mt-20 flex justify-center items-center flex-col top-0 left-0  z-20 transition duration-500 ease-linear bg-white shadow-md "
          : "fixed sticky w-full h-20 -mt-20 flex justify-center items-center flex-col top-0 left-0  z-20 transition duration-500 ease-linear"
      }
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.9,
      }}
    >
      <div className="px-4 w-full xl:max-w-con xl:px-0 flex items-center justify-between	">
        <img
          src={navbarBg || isHidden ? Logo : LogoWhite}
          className="cursor-pointer w-20 z-30"
          alt="Logo"
        />

        <div className="z-30 hidden lg:block">
          <ui
            className={
              navbarBg
                ? "flex items-center list-none transition duration-500 ease-in-out text-center text-gray-800"
                : "flex items-center list-none transition duration-500 ease-in-out text-center text-white"
            }
          >
            <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">
              Emisije
            </li>
            <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">
              Marketing
            </li>
            <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">
              Kontakt
            </li>
            <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">
              Aplikacija
            </li>
            <li className="h-full p-3">
              <span className="bg-blue-400 p-4 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
                RTG Music
              </span>
            </li>
          </ui>
        </div>
        <div className="lg:hidden p-0.5 bg-white rounded-full">
          <Hamburger
            rounded
            easing="ease-in"
            color="#1F2937"
            toggled={isHidden}
            toggle={setIsHidden}
          />
        </div>
      </div>
      <NavMenu hidden={isHidden} />
    </motion.nav>
  );
};

export default Nav;
