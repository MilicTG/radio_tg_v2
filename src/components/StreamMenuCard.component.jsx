import { motion } from "framer-motion";
import { RiCloseCircleFill, FaPlay } from "react-icons/all";

import StreamCard from "./StreamCard.component";

import musicStreamImage from "../assets/img_stream_music.jpg";
import kidsStreamImage from "../assets/img_stream_kids.jpg";
import framaStreamImage from "../assets/img_stream_frama.jpg";
import strunicaStreamImage from "../assets/img_stream_strunica.jpg";
import patriotStreamImage from "../assets/img_stream_patriot.jpg";

const StreamMenuCard = ({ show, close, isPlaying, startShow, showData }) => {
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
        className="z-30 relative bg-white p-8 rounded-md shadow-2xl flex justify-center items-start flex-col"
      >
        <RiCloseCircleFill
          size="3rem"
          onClick={close}
          className="absolute bg-white rounded-full -top-4 -right-4 text-red-500 cursor-pointer hover:text-red-600"
        />
        <h2 className="text-3xl mb-1 text-gray-800">Naši streamovi</h2>
        <p className="text-base font-light mb-1 text-gray-800">
          Za svakoga ponešto
        </p>
        <ul className="h-96 xl:h-screen xl:max-h-showModal w-full overflow-y-scroll">
          <li className="py-4">
            <StreamCard image={musicStreamImage} title={"RTG Music"} />
            <StreamCard image={kidsStreamImage} title={"RTG Kids"} />
            <StreamCard image={framaStreamImage} title={"RTG Frama"} />
            <StreamCard image={strunicaStreamImage} title={"RTG Strunica"} />
            <StreamCard image={patriotStreamImage} title={"RTG Za dom s..."} />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default StreamMenuCard;
