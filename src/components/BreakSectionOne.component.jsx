import React from "react";
import {BiRadio, HiMusicNote, BiNews} from 'react-icons/all'

const BreakSectionOne = () => {
    return (
        <section className="w-full flex justify-center h-80 bg-breakOne bg-fixed bg-center bg-cover">
            <div className="max-w-con w-full flex flex-row justify-evenly items-center z-10">
                <div
                    className="p-4 h-56 w-64 text-gray-800 flex-col rounded-xl bg-white opacity-90 flex justify-evenly items-center">
                    <BiRadio size="4.5rem" className="text-blue-700"/>
                    <p>Slusajte nas od 0 do 24h</p>
                </div>

                <div
                    className="p-4 h-56 w-64 text-gray-800 flex-col rounded-xl bg-white opacity-90 flex justify-evenly items-center">
                    <HiMusicNote size="4.5rem" className="text-blue-700"/>
                    <p>Najbolja glazba</p>
                </div>

                <div
                    className="p-4 h-56 w-64 text-gray-800 flex-col rounded-xl bg-white opacity-90 flex justify-evenly items-center">
                    <BiNews size="4.5rem" className="text-blue-700"/>
                    <p>Uvijek azurni</p>
                </div>
            </div>
        </section>
    );
};

export default BreakSectionOne;
