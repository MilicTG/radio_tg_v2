import React from 'react'

import zrcaloBck from '../assets/bck_show_zrcalo_card.jpg'

const ShowCard = props => {
    return (
        <figure className="w-64 h-80 rounded-xl shadow-xl relative overflow-hidden border-0">
            <img className="w-full h-full " src={zrcaloBck} alt="Image"/>
            <div
                className="bottom-0 left-0 w-full frosted overflow-hidden absolute transform translate-y-2/3 hover:translate-y-0 transition duration-100 ease-in-out">
                <h5 className="text-lg text-gray-800 py-3 px-4">Strunica, sarenica...</h5>
                <p className="text-gray-800 text-s font-light p-4 overflow-hidden">uto - pet 11:00</p>
                <p className="text-gray-800 text-s font-light p-4 overflow-hidden">
                    Središnja emisija u kojoj obrađujemo
                    aktualne teme i događaje,
                    kako u našoj sredini,
                    tako i šire.</p>
                <button className="bg-none text-blue-800 p-4">Idi na emisiju -></button>
            </div>
        </figure>
    )
}

export default ShowCard