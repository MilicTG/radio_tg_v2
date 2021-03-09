import React from 'react'
import SectionTitle from "./SectionTitle.component";

import locationImage from '../assets/img_location.jpg'

import {FaPhoneAlt, FaFax, FiMail, ImLocation2} from 'react-icons/all'

const ContactSection = () => {
    return (
        <section className="h-auto w-full flex justify-center">
            <div className="max-w-con w-full flex justify-start items-center z-10 py-32">
                <div className=" w-full">
                    <SectionTitle title="Kontaktirajte nas"/>

                    <div className="w-72 flex flex-row justify-start items-center py-8">
                        <div className="pr-4">
                            <FaPhoneAlt size="2.5rem" className="text-indigo-400"/>
                        </div>
                        <div>
                            <h5 className="text-2xl text-gray-800 py-1">Telefon</h5>
                            <p className="text-gray-800">
                                <span className="font-bold">Redakcija:</span> +387 34 352 909</p>
                            <p className="text-gray-800"><span className="font-bold">Marketing:</span> +387
                                34 353 768</p>
                        </div>
                    </div>

                    <div className="w-72 flex flex-row justify-start items-center py-8">
                        <div className="pr-4">
                            <FaFax size="2.5rem" className="text-yellow-400"/>
                        </div>
                        <div>
                            <h5 className="text-2xl text-gray-800 py-1">Fax</h5>
                            <p className="text-gray-800">+387 34 353 768</p>
                        </div>
                    </div>

                    <div className="w-72 flex flex-row justify-start items-center py-8">
                        <div className="pr-4">
                            <FiMail size="2.5rem" className="text-green-400"/>
                        </div>
                        <div>
                            <h5 className="text-2xl text-gray-800 py-1">E-Mail</h5>
                            <p className="text-gray-800">radiotomislavgrad@gmail.com</p>
                            <p className="text-gray-800">radio.tomislavgrad@tel.net.ba</p>
                        </div>
                    </div>

                    <div className="w-72 flex flex-row justify-start items-center py-8">
                        <div className="pr-4">
                            <ImLocation2 size="2.5rem" className="text-red-400"/>
                        </div>
                        <div>
                            <h5 className="text-2xl text-gray-800 py-1">Adresa</h5>
                            <p className="text-gray-800">Trg dr. Franje Tuđmana bb</p>
                            <p className="text-gray-800">80240, Tomislavgrad, BiH</p>
                        </div>
                    </div>
                </div>
                <img
                    src={locationImage}
                    className="h-96 rounded-md shadow-2xl"
                    alt=""
                />
            </div>

        </section>
    )
}

export default ContactSection