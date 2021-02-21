import React from "react";

import ShowCard from "./ShowCard.component";

const Shows = () => {
    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-con h-full flex items-start flex-col justify-center">
                <h2 className="text-3xl mb-1 mt-20 text-gray-900">
                    Naše najslušanije emisije
                </h2>
                <div className="w-28 h-1 mt-2 mb-2 rounded bg-blue-700"/>
                <div className="w-full grid grid-cols-4 grid-rows-2 gap-4">
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
