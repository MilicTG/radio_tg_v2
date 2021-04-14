import React from "react";
import { motion } from "framer-motion";
import { RiCloseCircleFill } from "react-icons/all";
import BtnModalPlay from "./BtnModalPlay.component";

const Player = ({
  show,
  close,
  isPlaying,
  handlePlaying,
  image,
  title,
  subTitle,
}) => {
  if (!show) {
    return null;
  }

  return (
    <motion.div className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-gray-700 bg-opacity-40 flex justify-center items-center">
      <div className="z-30 relative bg-white p-8 rounded-md shadow-2xl flex justify-center items-center flex-col">
        <RiCloseCircleFill
          size="3rem"
          onClick={close}
          className="absolute bg-white rounded-full -top-4 -right-4 text-red-500 cursor-pointer hover:text-red-600"
        />
        <img
          src={image}
          className="h-64 rounded-md shadow-2xl object-cover"
          alt=""
        />
        <h3 className="p-4 mt-8 text-xl md:text-2xl lg:text-3xl text-gray-900">
          {title}
        </h3>
        <p>{subTitle}</p>
        <div className="flex flex-row justify-evenly w-full mt-10">
          <p className="text-gray-900 mr-5">00:00</p>
          <input
            min="0"
            max="100"
            value="0"
            type="range"
            className="cursor-pointer w-full"
          />
          <p className="text-gray-900 ml-5">00:00</p>
        </div>
        <BtnModalPlay isPlaying={isPlaying} handlePlaying={handlePlaying} />
      </div>
    </motion.div>
  );
};

export default Player;
