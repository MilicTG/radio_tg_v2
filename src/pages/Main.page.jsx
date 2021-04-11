import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Hero from "../components/Hero.component";
import Player from "../components/Player.component";
import BreakSectionOne from "../components/BreakSectionOne.component";
import BreakSectionTwo from "../components/BreakSectionTwo.component";
import InfoSection from "../components/InfoSection.component";
import Shows from "../components/Shows.component";
import RTGMusic from "../components/RTGMusic.component";
import ContactSection from "../components/ContactSection.component";
import AndroidApp from "../components/AndroidApp.component";
import Footer from "../components/Footer.component";
import BtnToTop from "../components/BtnToTop.component";

//local data
import {
  aboutUsData,
  marketYourBusinessData,
  weddingAndOtherData,
} from "../data/local/InfoSectionData";
import imageAbout from "../assets/img_about.jpg";
import imageBusiness from "../assets/img_business.jpg";
import imageWedding from "../assets/img_wedding.jpg";

const Main = () => {
  const [returnToTopBtn, setReturnToTop] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const showReturnToTopBtn = () => {
    if (window.scrollY >= 130) {
      setReturnToTop(true);
    } else {
      setReturnToTop(false);
    }
  };

  const showPlayer = () => {
    setIsPlayerVisible(true);
  };

  const closePlayer = () => {
    setIsPlayerVisible(false);
  };

  const returnToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", showReturnToTopBtn);

  return (
    <>
      <Hero showPlayer={showPlayer} />
      <Player show={isPlayerVisible} close={closePlayer} />
      <BtnToTop show={returnToTopBtn} click={returnToTop} />
      <InfoSection {...aboutUsData} image={imageAbout} order={true} />
      <BreakSectionOne />
      <Shows />
      <RTGMusic />
      <InfoSection
        id="marketing"
        {...marketYourBusinessData}
        image={imageBusiness}
        order={true}
      />
      <InfoSection
        {...weddingAndOtherData}
        image={imageWedding}
        order={false}
      />
      <BreakSectionTwo />
      <ContactSection />
      <AndroidApp />
      <Footer />
    </>
  );
};

export default Main;
