import React from "react";
import {BiRadio, HiMusicNote, BiNews} from 'react-icons/all'

const BreakSectionOne = () => {
    return (
        <section className="w-full flex justify-center h-96 bg-breakOne bg-fixed bg-center bg-cover">
            <div className="max-w-con w-full flex flex-row justify-evenly items-center z-10">
                <div
                    className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
                    <BiRadio size="4.5rem" className="text-white"/>
                    <h5 className="text-2xl py-3">Uvijek s vama</h5>
                    <div className="w-20 h-1 rounded bg-white"/>
                    <p className="pt-2">Slusajte nas od 0 do 24h</p>
                </div>

                <div
                    className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
                    <HiMusicNote size="4.5rem" className="text-white"/>
                    <h5 className="text-2xl py-3">Najbolja glazba</h5>
                    <div className="w-20 h-1 rounded bg-white"/>
                    <p className="pt-2">Biramo samo hitove</p>
                </div>

                <div
                    className="p-4 h-56 w-72 text-white flex-col rounded-xl flex justify-center items-center">
                    <BiNews size="4.5rem" className="text-white"/>
                    <h5 className="text-2xl py-3">Informirajte se</h5>
                    <div className="w-20 h-1 rounded bg-white"/>
                    <p className="pt-2">Uvijek donosimo najnovije vijesti</p>
                </div>
            </div>
        </section>
    );
};

export default BreakSectionOne;
