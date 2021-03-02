import React from 'react'
import {motion, AnimatePresence} from "framer-motion"

import zrcaloBck from '../assets/zrcaloShow.jpg'

const ShowCard = props => {
    return (
        <AnimatePresence>
            <motion.figure
                transition={{
                    type: "ease",
                    duration: 0.1
                }}
                whileHover={{scale: 1.005}}
                whileTap={{scale: 0.95}}
                className="w-96 h-44 rounded-xl shadow-xl relative overflow-hidden border-0 cursor-pointer">
                <img className="w-full h-full object-cover content-center" src={zrcaloBck} alt="Image"/>
                <div
                    className="bottom-0 left-0  w-full bg-white opacity-80 overflow-hidden absolute">
                    <h5 className="text-lg text-gray-800 p-3">Strunica, sarenica, tkanica</h5>
                </div>
            </motion.figure>
        </AnimatePresence>
    )
}

export default ShowCard