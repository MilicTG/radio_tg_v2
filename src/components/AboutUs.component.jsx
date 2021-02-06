import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full pt-16 pb-16 flex justify-center bg-about bg-cover bg-no-repeat  ">
      <div className="max-w-con flex items-center justify-start">
        <div className="w-2/5 frosted rounded-md shadow-md p-10">
          <h2 className="text-3xl mb-8">O nama</h2>
          <p className="mb-5">
            Radio Tomislavgrad osnovan je 18. svibnja 1992. godine, u vrijeme
            najžešćih ratnih operacija na kupreško – duvanjskoj bojišnici, što
            znači da je utemeljen radi potrebe informiranja stanovništva u tim
            ratnim i kaotičnim prilikama. Od početnih nekoliko sati, od 18.
            prosinca 1998. emitiramo 24 sata vlastitoga programa.
          </p>
          <p className="mb-5">
            Emitiramo s tri odašiljača, na frekvencijama: 103.3, 95.9 i 95.1
            MHZ. Zahvaljujući internetu imamo određeni broj slušatelja u
            cijelome svijetu. Uglavnom su to naši ljudi koji žele čuti
            informacije iz rodnoga kraja, a slušaju nas na adresi
            www.radiotg.com
          </p>
          <p className="mb-5">
            Kroz sve ove godine našega djelovanja uvijek smo nastojali biti u
            službi našim slušateljima. Tako je i danas. Zato, pronađite naš
            signal i uvjerite se u kvalitetu i raznolikost programa koji
            svakodnevno nudimo. Vaš RTG
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
