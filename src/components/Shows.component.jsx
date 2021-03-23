import React from "react";

import SectionTitle from "./SectionTitle.component";
import ShowCard from "./ShowCard.component";

import { showCardData } from "../data/local/ShowCardData.js";
import zrcaloImg from "../assets/img_zrcalo.jpg";
import strunicaImg from "../assets/img_strunica.jpg";
import petmilImg from "../assets/img_petmil.jpg";
import razgovoriImg from "../assets/img_razgovori.jpg";
import glazbaonicaImg from "../assets/img_glazbaonica.jpg";
import obiteljskiImg from "../assets/img_obiteljski.jpg";
import slusamImg from "../assets/img_slusam.jpg";
import knjiznicaImg from "../assets/img_knjiznica.jpg";
import ostaloImg from "../assets/img_ostalo.jpg";

const Shows = () => {
  return (
    <section
      id="shows"
      className="w-full flex justify-center px-4 xl:px-0 mt-20 mb-16"
    >
      <div className="w-full max-w-con h-full flex items-start flex-col justify-center">
        <SectionTitle title="Naše najslušanije emisije" />
        <div className="w-full pt-2 pb-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-11 xl:grid-cols-3 xl:gap-12">
          <ShowCard
            key={showCardData[0].showId}
            title={showCardData[0].showTitle}
            image={zrcaloImg}
            desc={showCardData[0].showDescription}
            airTime={showCardData[0].showAirTime}
          />

          <ShowCard
            key={showCardData[1].showId}
            title={showCardData[1].showTitle}
            image={strunicaImg}
            desc={showCardData[1].showDescription}
            airTime={showCardData[1].showAirTime}
          />

          <ShowCard
            key={showCardData[2].showId}
            title={showCardData[2].showTitle}
            image={petmilImg}
            desc={showCardData[2].showDescription}
            airTime={showCardData[2].showAirTime}
          />

          <ShowCard
            key={showCardData[3].showId}
            title={showCardData[3].showTitle}
            image={glazbaonicaImg}
            desc={showCardData[3].showDescription}
            airTime={showCardData[3].showAirTime}
          />

          <ShowCard
            key={showCardData[4].showId}
            title={showCardData[4].showTitle}
            image={razgovoriImg}
            desc={showCardData[4].showDescription}
            airTime={showCardData[4].showAirTime}
          />

          <ShowCard
            key={showCardData[5].showId}
            title={showCardData[5].showTitle}
            image={obiteljskiImg}
            desc={showCardData[5].showDescription}
            airTime={showCardData[5].showAirTime}
          />

          <ShowCard
            key={showCardData[6].showId}
            title={showCardData[6].showTitle}
            image={slusamImg}
            desc={showCardData[6].showDescription}
            airTime={showCardData[6].showAirTime}
          />

          <ShowCard
            key={showCardData[7].showId}
            title={showCardData[7].showTitle}
            image={knjiznicaImg}
            desc={showCardData[7].showDescription}
            airTime={showCardData[7].showAirTime}
          />

          <ShowCard
            key={showCardData[8].showId}
            title={showCardData[8].showTitle}
            image={ostaloImg}
            desc={showCardData[8].showDescription}
            airTime={showCardData[8].showAirTime}
          />
        </div>
      </div>
    </section>
  );
};

export default Shows;
