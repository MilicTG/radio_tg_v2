import React from 'react'
import BtnPlay from "./BtnPlay.component";

const RTGMusic = () => {
    return (
        <section className="h-auto w-full flex justify-center bg-rtgMusicBg bg-fixed bg-center bg-cover">
            <div className="max-w-con w-full flex justify-start items-center z-10">
                <div className="py-20 w-5/12">
                    <h3 className="text-3xl text-blue-400 mb-1">RTG Music</h3>
                    <div className="w-32 h-1 rounded bg-white mb-3.5"/>
                    <h2 className="text-6xl text-white mb-10">
                        Najbolji internet radio.
                    </h2>
                    <p className="text-white">Bez emisija, bez reklama i bez vijesti!!! Glazba od 0 do 24 sata. Sviramo
                        samo hitove. Molio bih kolumnistu da mi pomogne. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Maecenas et metus dignissim, rhoncus purus at, varius nisl. Nullam ac viverra
                        nisl. Mauris tempus lectus ut odio porttitor, quis lacinia felis sollicitudin. Suspendisse
                        mauris enim, posuere ac justo eget, elementum vulputate nibh. Nulla sit amet dolor in lacus
                        porttitor ullamcorper vel sit amet risus.</p>
                    <button
                        className="bg-blue-400 p-4 mt-32 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all"> Sviraj
                        RTG Music
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RTGMusic