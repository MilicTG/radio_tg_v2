import React from "react";

import logoLight from "../assets/logo_rtg_main_white.svg";

const Footer = () => {
  return (
    <footer className="w-full h-auto px-4 xl:px-0 bg-gray-900 flex justify-center">
      <div className="max-w-con w-full flex flex-col items-center justify-center py-8 xl:py-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start">
          <div className=" md:col-span-2 lg:col-span-1">
            <img src={logoLight} alt="" className="w-40 h-auto py-4" />
            <p className="text-white">Trg dr. Franje Tuđmana bb</p>
            <p className="text-white">80240, Tomislavgrad, BiH</p>
          </div>

          <div className="flex flex-row py-8">
            <div className="px-0 xl:px-4">
              <h6 className="text-xl text-white opacity-60 pb-4">Telefon</h6>
              <p className="text-white">
                <span className="font-bold">Redakcija:</span> +387 34 352 909
              </p>
              <p className="text-white">
                <span className="font-bold">Marketing:</span> +387 34 353 768
              </p>
            </div>
          </div>

          <div className="flex flex-row py-8">
            <div className="px-0 xl:px-4">
              <h6 className="text-xl text-white opacity-60 pb-4">E-Mail</h6>
              <p className="text-white">radiotomislavgrad@gmail.com</p>
              <p className="text-white">radio.tomislavgrad@tel.net.ba</p>
            </div>
          </div>

          <div className="flex flex-row py-8">
            <div className="px-0 xl:px-4">
              <h6 className="text-xl text-white opacity-60 pb-4">
                Pls za stream
              </h6>
              <p className="text-white">Radio Tomislavgrad</p>
              <p className="text-white">RTG Music</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-0.5 bg-blue-200 rounded-3xl mt-8 mb-2" />

          <div className="w-full h-auto py-1 flex flex-col lg:flex-row justify-between">
            <p className="text-xs text-blue-50">
              Sva prava pridrzana Radio Tomislavgrad
            </p>
            <p className="text-xs text-blue-50">
              Designed and developed by Ivan Milic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
