import React from "react";
import {BiRadio, HiMusicNote, BiNews} from 'react-icons/all'

const BreakSectionOne = () => {
    return (
        <section className="w-full flex justify-center h-80 bg-breakOne bg-fixed bg-center bg-cover">
            <div className="max-w-con w-full flex flex-row justify-evenly items-center">
                <div
                    className="p-4 h-56 w-64 text-gray-800 flex-col rounded-xl frosted flex justify-evenly items-center">
                    <BiRadio size="4rem"/>
                    <p>Slusajte nas od 0 do 24h</p>
                </div>

                <div
                    className="p-4 h-56 w-64 text-gray-800 flex-col rounded-xl frosted flex justify-evenly items-center">
                    <HiMusicNote size="4rem"/>
                    <p>Najbolja glazba</p>
                </div>

                <div
                    className="p-4 h-56 w-64 text-gray-800 flex-col rounded-xl frosted flex justify-evenly items-center">
                    <BiNews size="4rem"/>
                    <p>Uvijek azurni</p>
                </div>
            </div>
        </section>
    );
};

export default BreakSectionOne;
