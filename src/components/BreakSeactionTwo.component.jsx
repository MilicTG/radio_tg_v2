import React from "react";
import {FaCity, GoRadioTower, SiAudiomack} from 'react-icons/all'

const BreakSectionTwo = () => {
    return (
        <section className="w-full flex justify-center h-96 bg-breakTwo bg-fixed bg-center bg-cover">
            <div className="max-w-con w-full flex flex-row justify-evenly items-center z-10">
                <div
                    className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
                    <FaCity size="4.5rem" className="text-white"/>
                    <h5 className="text-2xl py-3">95.9 Mhz</h5>
                    <div className="w-20 h-1 rounded bg-white"/>
                    <p className="pt-2">Tomislavgrad</p>
                </div>

                <div
                    className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
                    <GoRadioTower size="4.5rem" className="text-white"/>
                    <h5 className="text-2xl py-3">103.3 Mhz</h5>
                    <div className="w-20 h-1 rounded bg-white"/>
                    <p className="pt-2">Opcina Tomislavgrad</p>
                </div>

                <div
                    className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
                    <SiAudiomack size="4.5rem" className="text-white"/>
                    <h5 className="text-2xl py-3">95.1 Mhz</h5>
                    <div className="w-20 h-1 rounded bg-white"/>
                    <p className="pt-2">Busko blato i okolica</p>
                </div>
            </div>
        </section>
    );
};

export default BreakSectionTwo;
