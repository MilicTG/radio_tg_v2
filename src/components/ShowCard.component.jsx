import React from 'react'

import zrcaloBck from '../assets/bck_show_zrcalo_card.jpg'

const ShowCard = props => {
    return (
        <figure className="w-64 h-80 rounded-xl shadow-xl relative overflow-hidden border-0">
            <img className="w-full h-full rounded-xl " src={zrcaloBck} alt="Image"/>
            <div className="bottom-0 left-0 w-full frosted absolute rounded-b-xl transform translate-y-2/3 group-hover:translate-x-0">
                <h4 className="text-xl text-gray-800 p-4">Strunica, sarenica...</h4>
                <p className="text-gray-800 text-s font-light p-4 ">Središnja emisija u kojoj obrađujemo
                    aktualne teme i
                    događaje, kako u našoj sredini, tako i šire.</p>
            </div>
        </figure>
    )
}

export default ShowCard