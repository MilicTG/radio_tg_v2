import React from "react";

const AndroidApp = () => {
  return (
    <section className="h-auto w-full px-4 xl:px-0 flex justify-center bg-smartphoneBg bg-fixed bg-center bg-cover">
      <div className="max-w-con w-full flex justify-start items-center z-10">
        <div className="py-20 w-full lg:w-5/6 xl:w-5/12">
          <h3 className="text-3xl text-blue-400 mb-1">Android aplikacija</h3>
          <div className="w-32 h-1 rounded bg-white mb-3.5" />
          <h2 className="text-6xl text-white mb-10">
            Slusajte RTG i na vasem pametnom telefonu
          </h2>
          <p className="text-white">
            Molim vrijednu pcelicu da osmisli nesto genijalno i ovde. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus
            dignissim, rhoncus purus at, varius nisl. Nullam ac viverra nisl.
            Mauris tempus lectus ut odio porttitor, quis lacinia felis
            sollicitudin. Suspendisse mauris enim, posuere ac justo eget,
            elementum vulputate nibh. Nulla sit amet dolor in lacus porttitor
            ullamcorper vel sit amet risus.
          </p>
          <button className="bg-blue-400 p-4 mt-20 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
            Preuzmite s Google play
          </button>
        </div>
      </div>
    </section>
  );
};

export default AndroidApp;