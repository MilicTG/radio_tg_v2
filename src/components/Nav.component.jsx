import React, {useState} from "react";
import {motion} from 'framer-motion'

import Logo from "../assets/logo_rtg_main.svg";
import LogoWhite from "../assets/logo_rtg_main_white.svg"


const Nav = () => {

    const [navbarBg, setNavbarBg] = useState(false)

    const changeNavbarBackground = () => {
        if (window.scrollY >= 80) {
            setNavbarBg(true)
        } else {
            setNavbarBg(false)
        }
    }

    window.addEventListener('scroll', changeNavbarBackground)

    return (
        <motion.nav className={
            navbarBg ?
                'w-full h-20 -mt-20 flex justify-center top-0 left-0 sticky z-20 transition duration-500 ease-in-out bg-white shadow-md' :
                'w-full h-20 -mt-20 flex justify-center top-0 left-0 sticky z-20 transition duration-500 ease-in-out'
        }
                    initial={{y: -90}}
                    animate={{y: 0}}
                    transition={{
                        type: "spring",
                        duration: 0.9
                    }}
        >
            <div className="min-w-con flex items-center justify-between	">
                <img src={
                    navbarBg ? Logo : LogoWhite
                } className="cursor-pointer w-20 z-30" alt="Logo"/>

                <div className="z-30">
                    <ui className={
                        navbarBg ?
                            'flex items-center list-none transition duration-500 ease-in-out text-center text-gray-800' :
                            'flex items-center list-none transition duration-500 ease-in-out text-center text-white'
                    }>
                        <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">Emisije</li>
                        <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">Marketing</li>
                        <li className="cursor-pointer h-full px-3 hover:text-blue-400 transition-all">Kontakt</li>
                        <li className="h-full p-3">
                        <span
                            className="bg-blue-400 p-4 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
                            RTG Music
                        </span>
                        </li>
                    </ui>
                </div>
            </div>
        </motion.nav>
    );
};

export default Nav;
