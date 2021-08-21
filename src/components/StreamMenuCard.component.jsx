import { motion } from "framer-motion";
import { RiCloseCircleFill, FaPlay } from "react-icons/all";

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
        <h2 className="text-3xl mb-1 text-gray-800">Nasi Streamovi</h2>
        <ul className="h-96 xl:h-screen xl:max-h-showModal w-full overflow-y-scroll">
          <li className="py-8">
            <div className="w-96 px-8 py-4 mb-8 mr-4 bg-blue-400 rounded-md text-white">
              RTG Music
            </div>
            <div className="w-96 px-8 py-4 mb-8 mr-4 bg-blue-400 rounded-md text-white">
              RTG Kids
            </div>
            <div className="w-96 px-8 py-4 mb-8 mr-4 bg-blue-400 rounded-md text-white">
              RTG Frama
            </div>
            <div className="w-96 px-8 py-4 mb-8 mr-4 bg-blue-400 rounded-md text-white">
              RTG Strunica
            </div>
            <div className="w-96 px-8 py-4 mb-8 mr-4 bg-blue-400 rounded-md text-white">
              RTG Za dom s...
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default StreamMenuCard;
