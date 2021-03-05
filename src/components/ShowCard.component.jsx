import React from 'react'
import {motion, AnimatePresence} from "framer-motion"

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
                className="place-content-stretch	 bg-gray-100 p-0 rounded-xl shadow-2xl overflow-hidden border-0 cursor-pointer">
                <img className="w-full h-40 object-cover content-center mb-2" src={props.image} alt="Show image"/>
                <div className="h-4/6 flex flex-col items-stretch">
                    <h5 className="text-xl text-gray-800 p-4 font-bold">{props.title}</h5>
                    <p className="h-40 p-4">{props.desc}</p>
                    <p className="flex-grow font-light text-blue-800 p-4 text-sm">{props.airTime}</p>
                </div>
            </motion.figure>
        </AnimatePresence>
    )
}

export default ShowCard