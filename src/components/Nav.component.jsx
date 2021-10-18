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
  const [isNavHidden, setNavIsHidden] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  const closeNavMenu = () => {
    setNavIsHidden(false);
  };

  window.addEventListener("scroll", changeNavbarBackground);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <motion.nav
      className={
        navbarBg || isNavHidden
          ? "sticky w-full h-20 -mt-20 flex justify-center items-center flex-col top-0 left-0  z-20 transition duration-500 ease-linear bg-white shadow-md "
          : "sticky w-full h-20 -mt-20 flex justify-center items-center flex-col top-0 left-0  z-20 transition duration-500 ease-linear"
      }
      variants={revealFromTopAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="px-4 w-full xl:max-w-con xl:px-0 flex items-center justify-between	">
        <img
          src={navbarBg || isNavHidden ? Logo : LogoWhite}
          className="cursor-pointer w-20 z-30"
          alt="Logo"
          onClick={toggleHome}
        />

        <div className="z-30 hidden lg:block">
          <div
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
                to="live_cam"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Kamera uživo
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
                to="streams"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <span className="bg-blue-400 py-4 px-6 ml-4 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
                  RTG programi
                </span>
              </Link>
            </li>
          </div>
        </div>
        <div className="lg:hidden p-0.5 bg-white rounded-full">
          <Hamburger
            rounded
            size={20}
            easing="ease-in"
            color="#1F2937"
            toggled={isNavHidden}
            toggle={setNavIsHidden}
          />
        </div>
      </div>
      <NavMenu hidden={isNavHidden} close={closeNavMenu} />
    </motion.nav>
  );
};

export default Nav;
