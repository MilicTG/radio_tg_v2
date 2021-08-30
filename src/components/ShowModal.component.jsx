import { motion } from "framer-motion";
import { RiCloseCircleFill, FaPlay } from "react-icons/all";

const ShowModal = ({ show, close, startShow, showData }) => {
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
        className="z-30 w-3/4 relative bg-white p-8 rounded-md shadow-2xl flex justify-center items-start flex-col"
      >
        <RiCloseCircleFill
          size="3rem"
          onClick={close}
          className="absolute bg-white rounded-full -top-4 -right-4 text-red-500 cursor-pointer hover:text-red-600"
        />

        <h3 className="py-4 text-xl md:text-2xl lg:text-3xl text-gray-900">
          {showData.showTitle}
        </h3>

        <ul className="h-96 xl:h-screen xl:max-h-showModal w-full overflow-y-scroll">
          {showData.showList.map((data, i) => {
            return (
              <li
                key={i}
                className="w-full  my-2 border-b border-solid border-gray-900 border-opacity-10 flex flex-row items-center justify-between"
              >
                <div className="flex flex-col py-3">
                  <h4 className="text-xl text-gray-900">{data.title}</h4>
                  <p className="text-sm font-light text-gray-900">
                    Emitirano: {data.date}
                  </p>
                </div>
                <div
                  onClick={() => startShow(data)}
                  className="p-4 rounded-full mr-4 bg-blue-400 shadow-lg transition-all hover:bg-blue-800 cursor-pointer"
                >
                  <FaPlay className="text-white" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default ShowModal;
