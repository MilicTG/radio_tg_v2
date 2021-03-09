import React from 'react'

import {FaPhoneAlt, FaFax, FiMail, ImLocation2} from 'react-icons/all'

import logoLight from '../assets/logo_rtg_main_white.svg'

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-gray-900 flex justify-center">
            <div className="max-w-con w-full flex flex-col items-center justify-center py-16">

                <img src={logoLight} alt="" className="w-40 h-auto mb-16"/>

                <div className="w-full flex flex-row justify-between items-start">

                    <div className="flex flex-row">
                        <div>
                            <FaPhoneAlt size="2rem" className="text-white"/>
                        </div>
                        <div className="px-4">
                            <h5 className="text-2xl text-white pb-4">Telefon</h5>
                            <p className="text-white">
                                <span className="font-bold">Redakcija:</span> +387 34 352 909</p>
                            <p className="text-white"><span className="font-bold">Marketing:</span> +387
                                34 353 768</p>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="">
                            <FaFax size="2rem" className="text-white"/>
                        </div>
                        <div className="px-4">
                            <h5 className="text-2xl text-white pb-4">Fax</h5>
                            <p className="text-white">+387 34 352 909</p>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="">
                            <FiMail size="2rem" className="text-white"/>
                        </div>
                        <div className="px-4">
                            <h5 className="text-2xl text-white pb-4">E-Mail</h5>
                            <p className="text-white">radiotomislavgrad@gmail.com</p>
                            <p className="text-white">radio.tomislavgrad@tel.net.ba</p>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="">
                            <ImLocation2 size="2rem" className="text-white"/>
                        </div>
                        <div className="px-4">
                            <h5 className="text-2xl text-white pb-4">Adresa</h5>
                            <p className="text-white">Trg dr. Franje Tuđmana bb</p>
                            <p className="text-white">80240, Tomislavgrad, BiH</p>
                        </div>
                    </div>

                </div>

                <div className="w-full h-0.5 bg-blue-200 rounded-3xl mt-8 mb-2"/>

                <div className="w-full h-auto py-1 flex flex-row justify-between">
                    <p className="text-xs text-blue-50">Sva prava pridrzana Radio Tomislavgrad</p>
                    <p className="text-xs text-blue-50">Designed and developed by milic.dev</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer