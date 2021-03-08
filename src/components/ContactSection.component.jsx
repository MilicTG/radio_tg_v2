import React from 'react'

import {FaPhoneAlt, FaFax, FiMail, ImLocation2} from 'react-icons/all'

const ContactSection = () => {
    return (
        <section className="h-auto w-full flex justify-center bg-locationBg bg-fixed bg-center bg-cover">
            <div className="max-w-con w-full flex justify-start items-center z-10">
                <div className="py-20 w-full">
                    <h3 className="text-3xl text-blue-400 mb-1">Kontaktirajte nas</h3>
                    <div className="w-32 h-1 rounded bg-white mb-10"/>

                    <div className="grid grid-cols-2 place-items-center	">

                    <div className="w-72 flex flex-row justify-start items-center py-4">
                        <div className="pr-4">
                            <FaPhoneAlt size="2.5rem" className="text-indigo-400"/>
                        </div>
                        <div>
                            <h5 className="text-2xl text-white py-1">Telefon</h5>
                            <p className="text-white">
                                <span className="font-bold">Redakcija:</span> +387 34 352 909</p>
                            <p className="text-white"><span className="font-bold">Marketing:</span> +387
                                34 353 768</p>
                        </div>
                    </div>

                    <div className="w-72 flex flex-row justify-start items-center py-4">
                        <div className="pr-4">
                            <FaFax size="2.5rem" className="text-yellow-400"/>
                        </div>
                        <div>
                            <h5 className="text-2xl text-white py-1">Fax</h5>
                            <p className="text-white">+387 34 353 768</p>
                        </div>
                    </div>

                    <div className="w-72 flex flex-row justify-start items-center py-4">
                        <div className="pr-4">
                            <FiMail size="2.5rem" className="text-green-400"/>
                        </div>
                        <div>
                            <h5 className="text-2xl text-white py-1">E-Mail</h5>
                            <p className="text-white">radiotomislavgrad@gmail.com</p>
                            <p className="text-white">radio.tomislavgrad@tel.net.ba</p>
                        </div>
                    </div>

                    <div className="w-72 flex flex-row justify-start items-center py-4">
                        <div className="pr-4">
                            <ImLocation2 size="2.5rem" className="text-red-400"/>
                        </div>
                        <div>
                            <h5 className="text-2xl text-white py-1">Adresa</h5>
                            <p className="text-white">Trg dr. Franje Tuđmana bb</p>
                            <p className="text-white">80240, Tomislavgrad, BiH</p>
                        </div>
                    </div>

                </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection