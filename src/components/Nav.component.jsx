import React, { useState } from "react";
import NavMenu from "./NavMenu.component";
import { motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/logo_rtg_main.svg";
import LogoWhite from "../assets/logo_rtg_main_white.svg";

import { revealFromTopAnimation } from "../animations/animations";

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

  const closeNavMenu = () => {
    setIsHidden(false);
  };

  window.addEventListener("scroll", changeNavbarBackground);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <motion.nav
      className={
        navbarBg || isHidden
          ? "sticky w-full h-20 -mt-20 flex justify-center items-center flex-col top-0 left-0  z-20 transition duration-500 ease-linear bg-white shadow-md "
          : "sticky w-full h-20 -mt-20 flex justify-center items-center flex-col top-0 left-0  z-20 transition duration-500 ease-linear"
      }
      variants={revealFromTopAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="px-4 w-full xl:max-w-con xl:px-0 flex items-center justify-between	">
        <img
          src={navbarBg || isHidden ? Logo : LogoWhite}
          className="cursor-pointer w-20 z-30"
          alt="Logo"
          onClick={toggleHome}
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
              <Link
                activeClass="active"
                to="shows"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Emisije
              </Link>
            </li>
            <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">
              <Link
                activeClass="active"
                to="marketing"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Marketing
              </Link>
            </li>
            <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Kontakt
              </Link>
            </li>
            <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">
              <Link
                activeClass="active"
                to="app"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Aplikacija
              </Link>
            </li>
            <li className="h-full p-3">
              <Link
                activeClass="active"
                to="rtg_music"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <span className="bg-blue-400 p-4 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
                  RTG Music
                </span>
              </Link>
            </li>
          </ui>
        </div>
        <div className="lg:hidden p-0.5 bg-white rounded-full">
          <Hamburger
            rounded
            size={20}
            easing="ease-in"
            color="#1F2937"
            toggled={isHidden}
            toggle={setIsHidden}
          />
        </div>
      </div>
      <NavMenu hidden={isHidden} close={closeNavMenu} />
    </motion.nav>
  );
};

export default Nav;
