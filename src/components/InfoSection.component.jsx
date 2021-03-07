import React from "react";

import SectionTitle from "./SectionTitle.component";

const InfoSection = (props) => {

    return (
        <div className="w-full pt-16 pb-16 flex justify-center">
            <div className="max-w-con h-full flex items-center justify-between">
                <div className={
                    props.order ? 'w-2/6 py-10' : 'w-2/6 py-10 order-2'
                }>
                    <SectionTitle title={props.title}/>
                    <p className="mb-5 text-gray-900">
                        {props.textOne}
                    </p>
                    <p className="mb-5 text-gray-900">
                        {props.textTwo}
                    </p>
                    <p className="mb-5 text-gray-900">
                        {props.textThree}
                    </p>
                </div>
                <img
                    src={props.image}
                    className="h-96 rounded-md shadow-2xl"
                    alt=""
                />
            </div>
        </div>
    );
};

export default InfoSection;
