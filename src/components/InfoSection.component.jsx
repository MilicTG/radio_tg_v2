import React from "react";

import SectionTitle from "./SectionTitle.component";

const InfoSection = (props) => {
  return (
    <div className="w-full pt-12 pb-12 lg:pt-16 lg:pb-16 flex justify-center">
      <div className="max-w-con h-full flex flex-col px-4 lg:px-0 lg:flex-row lg:items-center justify-around">
        <div
          className={
            props.order
              ? "w-full lg:w-2/6 py-10"
              : "w-full lg:w-2/6 py-10 order-2"
          }
        >
          <SectionTitle title={props.title} />
          <p className="mb-5 text-gray-900">{props.textOne}</p>
          <p className="mb-5 text-gray-900">{props.textTwo}</p>
          <p className="mb-5 text-gray-900">{props.textThree}</p>
        </div>
        <img
          src={props.image}
          className="h-72 lg:h-96 rounded-md shadow-2xl object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default InfoSection;
