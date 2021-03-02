import React, {useState} from "react";

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
        <nav className={
            navbarBg ?
                'w-full h-20 -mt-20 flex justify-center top-0 left-0 sticky z-20 transition duration-500 ease-in-out bg-white shadow-md' :
                'w-full h-20 -mt-20 flex justify-center top-0 left-0 sticky z-20 transition duration-500 ease-in-out'
        }>
            <div className="min-w-con flex items-center justify-between	">
                <img src={
                    navbarBg ? Logo : LogoWhite
                } className=" w-20 z-30" alt="Logo"/>

                <div className="z-30">
                    <ui className={
                        navbarBg ?
                            'flex items-center list-none transition duration-500 ease-in-out text-center text-gray-800' :
                            'flex items-center list-none transition duration-500 ease-in-out text-center text-white'
                    }>
                        <li className="h-full p-3">Pocetna</li>
                        <li className="h-full p-3">Emisije</li>
                        <li className="h-full p-3">Marketing</li>
                        <li className="h-full p-3">Kontakt</li>
                        <li className="h-full p-3">RTG Music</li>
                    </ui>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
