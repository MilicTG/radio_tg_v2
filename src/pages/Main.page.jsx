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
import {aboutUsData, marketYourBusinessData, weddingAndOtherData} from "../data/local/InfoSectionData";
import imageAbout from '../assets/img_about.jpg'
import imageBusiness from '../assets/img_business.jpg'
import imageWedding from '../assets/img_wedding.jpg'

const Main = () => {
    return (
        <>
            <Hero/>
            <InfoSection
                title={aboutUsData.title}
                textOne={aboutUsData.textOne}
                textTwo={aboutUsData.textTwo}
                textThree={aboutUsData.textThree}
                image={imageAbout}
                order={true}/>
            <BreakSectionOne/>
            <Shows/>
            <RTGMusic/>
            <InfoSection
                title={marketYourBusinessData.title}
                textOne={marketYourBusinessData.textOne}
                textTwo={marketYourBusinessData.textTwo}
                textThree={marketYourBusinessData.textThree}
                image={imageBusiness}
                order={true}/>
            <InfoSection
                title={weddingAndOtherData.title}
                textOne={weddingAndOtherData.textOne}
                textTwo={weddingAndOtherData.textTwo}
                textThree={weddingAndOtherData.textThree}
                image={imageWedding}
                order={false}/>
            <ContactSection/>
            <BreakSectionTwo/>
            <AndroidApp/>
            <Footer/>
        </>
    );
};

export default Main;
