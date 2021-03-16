import React from "react";

import Hero from "../components/Hero.component";
import BreakSectionOne from "../components/BreakSectionOne.component";
import BreakSectionTwo from "../components/BreakSeactionTwo.component";
import InfoSection from "../components/InfoSection.component";
import Shows from "../components/Shows.component";
import RTGMusic from "../components/RTGMusic.component";
import ContactSection from "../components/ContactSection.component";
import AndroidApp from "../components/AndroidApp.component";
import Footer from "../components/Footer.component";

//local data
import {aboutUsData, marketYourBusinessData, weddingAndOtherData, androidAppData} from "../data/local/InfoSectionData";
import imageAbout from '../assets/img_about.jpg'
import imageBusiness from '../assets/img_business.jpg'
import imageWedding from '../assets/img_wedding.jpg'

const Main = () => {
    return (
        <>
            <div className="w-full h-screen bg-gray-700"/>
            {/*<Hero/>*/}
            {/*<InfoSection*/}
            {/*    {...aboutUsData}*/}
            {/*    image={imageAbout}*/}
            {/*    order={true}/>*/}
            {/*<BreakSectionOne/>*/}
            {/*<Shows/>*/}
            {/*<RTGMusic/>*/}
            {/*<InfoSection*/}
            {/*    {...marketYourBusinessData}*/}
            {/*    image={imageBusiness}*/}
            {/*    order={true}/>*/}
            {/*<InfoSection*/}
            {/*    {...weddingAndOtherData}*/}
            {/*    image={imageWedding}*/}
            {/*    order={false}/>*/}
            {/*<BreakSectionTwo/>*/}
            {/*<ContactSection/>*/}
            {/*<AndroidApp/>*/}
            {/*<Footer/>*/}
        </>
    );
};

export default Main;
