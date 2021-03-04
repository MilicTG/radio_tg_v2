import React from "react";

import Hero from "../components/Hero.component";
import AboutUs from "../components/AboutUs.component";
import BreakSectionOne from "../components/BreakSectionOne.component";
import BreakSectionTwo from "../components/BreakSeactionTwo.component";
import Shows from "../components/Shows.component";
import RTGMusic from "../components/RTGMusic.component";
import MarketingSection from "../components/MarketingSection.component";
import ContactSection from "../components/ContactSection.component";
import Footer from "../components/Footer.component";

const Main = () => {
    return (
        <>
            <Hero/>
            <AboutUs/>
            <BreakSectionOne/>
            <Shows/>
            <RTGMusic/>
            <BreakSectionTwo/>
            <MarketingSection/>
            <ContactSection/>
            <Footer/>
        </>
    );
};

export default Main;
