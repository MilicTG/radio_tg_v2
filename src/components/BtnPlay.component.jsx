import React from "react";
import { FaPlay } from "react-icons/fa";

const BtnPlay = () => {
  return (
    <button className="h-20 w-20 flex justify-center items-center shadow-lg frosted rounded-full transition-all duration-100 ease transform hover:scale-105">
      <FaPlay className="text-gray-800 h-11 w-11" />
    </button>
  );
};

export default BtnPlay;
