import React from 'react'

import {motion, AnimatePresence} from 'framer-motion'


const NavMenu = ({hidden}) => {
    return (
        <AnimatePresence>
            {hidden && (
                <motion.div
                    className="absolute flex w-full h-screen bg-white top-20 py-16 items-start list-none transition duration-500 ease-in-out text-center text-gray-800"
                    initial={{x: 1000}}
                    animate={{x: 0}}
                    exit={{x: 1000}}
                    transition={{
                        type: "ease",
                        duration: 0.5
                    }}>
                    <ui className="w-full h-14">
                        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">Emisije</li>
                        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">Marketing</li>
                        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">Kontakt</li>
                        <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">Aplikacija</li>
                        <li className="h-full w-full p-3">
                            <button
                                className="bg-blue-400 p-4 w-full text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
                                RTG Music
                            </button>
                        </li>
                    </ui>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default NavMenu