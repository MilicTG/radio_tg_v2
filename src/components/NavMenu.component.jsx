import React from "react";
import { Transition } from "@headlessui/react";

const NavMenu = ({ hidden }) => {
  return (
    <Transition
      show={hidden}
      enter="transition-opacity ease-linear duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="absolute z-30 w-full h-auto bg-white top-20 right-0 py-16 items-start list-none text-center text-gray-800">
        <ul className="w-screen h-auto">
          <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">
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
      </div>
    </Transition>
  );
};

export default NavMenu;
