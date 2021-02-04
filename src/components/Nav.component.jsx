import React from "react";

import Logo from "../assets/logo_rtg_main.svg";

const Nav = () => {
  return (
    <nav className="w-full	h-20 -mt-20 flex justify-center top-0 left-0 sticky z-10 shadow-md frosted">
      <div className="min-w-con flex items-center justify-between	">
        <img src={Logo} className=" w-20" alt="Logo" />

        <div>
          <ui className="flex items-center list-none	text-center text-gray-800">
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
