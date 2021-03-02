import React from "react";

import SectionTitle from "./SectionTitle.component";
import ShowCard from "./ShowCard.component";

const Shows = () => {
    return (
        <section className="w-full flex justify-center mt-20 mb-16">
            <div className="w-full max-w-con h-full flex items-start flex-col justify-center">
               <SectionTitle title="Naše najslušanije emisije"/>
                <div className="w-full pt-2 pb-12 grid grid-cols-3 gap-10">
                    <ShowCard/>
                    <ShowCard/>
                    <ShowCard/>
                    <ShowCard/>
                    <ShowCard/>
                    <ShowCard/>
                    <ShowCard/>
                    <ShowCard/>
                    <ShowCard/>
                </div>
            </div>
        </section>
    );
};

export default Shows;
