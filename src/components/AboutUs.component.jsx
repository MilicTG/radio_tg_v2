import React from "react";

import SectionTitle from "./SectionTitle.component";

import aboutPic from "../assets/bck_about.jpg";

const AboutUs = () => {
    return (
        <div className="w-full pt-16 pb-16 flex justify-center">
            <div className="max-w-con h-full flex items-center justify-between">
                <div className="w-2/6 py-10">
                   <SectionTitle title="O nama"/>
                    <p className="mb-5 text-gray-900">
                        Radio Tomislavgrad osnovan je 18. svibnja 1992. godine, u vrijeme
                        najžešćih ratnih operacija na kupreško – duvanjskoj bojišnici, što
                        znači da je utemeljen radi potrebe informiranja stanovništva u tim
                        ratnim i kaotičnim prilikama. Od početnih nekoliko sati, od 18.
                        prosinca 1998. emitiramo 24 sata vlastitoga programa.
                    </p>
                    <p className="mb-5 text-gray-900">
                        Emitiramo s tri odašiljača, na frekvencijama: 103.3, 95.9 i 95.1
                        MHZ. Zahvaljujući internetu imamo određeni broj slušatelja u
                        cijelome svijetu. Uglavnom su to naši ljudi koji žele čuti
                        informacije iz rodnoga kraja, a slušaju nas na adresi
                        www.radiotg.com
                    </p>
                    <p className="mb-5 text-gray-900">
                        Kroz sve ove godine našega djelovanja uvijek smo nastojali biti u
                        službi našim slušateljima. Tako je i danas. Zato, pronađite naš
                        signal i uvjerite se u kvalitetu i raznolikost programa koji
                        svakodnevno nudimo. Vaš RTG
                    </p>
                </div>
                <img
                    src={aboutPic}
                    className="h-96 rounded-md shadow-2xl"
                    alt="o nama"
                />
            </div>
        </div>
    );
};

export default AboutUs;
