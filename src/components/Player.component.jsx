import React from "react";
import { motion } from "framer-motion";
import { RiCloseCircleFill } from "react-icons/all";
import BtnModalPlay from "./BtnModalPlay.component";

const Player = ({
  src,
  audioRef,
  show,
  close,
  isPlaying,
  handlePlaying,
  image,
  title,
  subTitle,
  currentTime,
  duration,
}) => {
  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  if (!show) {
    return null;
  }

  return (
    <motion.div
      onClick={close}
      className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-gray-700 bg-opacity-40 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="m-4 z-30 relative bg-white p-4 md:p-4 xl:p-6 rounded-md shadow-2xl flex justify-center items-center flex-col"
      >
        <RiCloseCircleFill
          size="3rem"
          onClick={close}
          className="absolute bg-white rounded-full -top-4 -right-4 text-red-500 cursor-pointer hover:text-red-600"
        />
        <img
          src={image}
          className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-md shadow-2xl object-cover"
          alt=""
        />
        <h3 className="p-2 mt-4 max-w-player text-xl md:text-2xl lg:text-3xl text-center text-gray-900">
          {title}
        </h3>
        <p className="text-sm md:text-lg lg:text-xl pt-2 opacity-80">
          {subTitle}
        </p>

        {title === "Radio Tomislavgrad" || title === "RTG Music" ? (
          <p></p>
        ) : (
          <div className="flex flex-row justify-evenly w-full mt-8">
            <p className="text-gray-900 mr-5">{getTime(currentTime)}</p>

            <input
              min={0}
              max={duration || 0}
              value={currentTime}
              type="range"
              onChange={handleSeek}
              className="cursor-pointer w-full"
            />

            <p className="text-gray-900 ml-5">
              {getTime(duration) === "Infinity:aN" ? "∞" : getTime(duration)}
            </p>
          </div>
        )}

        <BtnModalPlay isPlaying={isPlaying} handlePlaying={handlePlaying} />
      </div>
    </motion.div>
  );
};

export default Player;
