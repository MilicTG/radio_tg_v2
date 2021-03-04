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
                whileHover={{scale: 1.010}}
                whileTap={{scale: 0.95}}
                className="bg-gray-100 p-0 rounded-xl shadow-2xl overflow-hidden border-0 cursor-pointer">
                <img className="w-full h-40 object-cover content-center" src={zrcaloBck} alt="Show image"/>
                <div
                    className="    ">
                    <h5 className="text-xl text-gray-800 p-4 font-bold">Strunica, šarenica, tkanica</h5>
                    <p className="p-4">Središnja emisija u kojoj obrađujemo aktualne teme i događaje, kako u našoj
                        sredini, tako i
                        šire.</p>
                    <p className="font-medium bg-gradient-to-r from-blue-800 to-blue-400 text-white p-4 text-sm">Od utorka do petka u 11:00 sati</p>
                </div>
            </motion.figure>
        </AnimatePresence>
    )
}

export default ShowCard