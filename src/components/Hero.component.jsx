import React from "react";
import {motion} from 'framer-motion'
import BtnPlay from "./BtnPlay.component";

const Hero = () => {
    return (
        <header className="h-screen">
            <div className="h-screen bg-hero bg-fixed bg-cover bg-no-repeat bg-center flex justify-center items-center">
                <div className="absolute inset-0 bg-gray-700 opacity-60"/>
                <div className="min-w-con flex h-full flex-col justify-center items-center">
                    <div className="my-28 z-10 flex justify-center flex-col items-center">
                        <motion.h1
                            initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.9
                            }}
                            className="text-8xl text-white m-0 tracking-heroWide">Radio Tomislavgrad
                        </motion.h1>
                        <motion.h3
                            initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 1.2
                            }}
                            className="text-3xl text-white font-thin my-3 tracking-heroWide">
                            95.1,95.9 i 103.3Mhz
                        </motion.h3>
                    </div>
                    <div className="flex justify-center items-center z-10">
                        <BtnPlay/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
