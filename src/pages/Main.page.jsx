import React, { useState, useRef } from "react";
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
import { RtgMainStream, RtgMusicStream } from "../data/local/StreamRadioUrls";

const Main = () => {
  const [returnToTopBtn, setReturnToTop] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [currentAudio, setCurrentAudio] = useState("");

  //audioRef
  const audioRef = useRef(null);

  const showReturnToTopBtn = () => {
    if (window.scrollY >= 130) {
      setReturnToTop(true);
    } else {
      setReturnToTop(false);
    }
  };

  const setStreamUrl = (url) => {
    setCurrentAudio(url);
  };

  const playAudio = () => {
    audioRef.current.play();
  };

  const showPlayer = () => {
    setIsPlayerVisible(true);
  };

  const closePlayer = () => {
    setIsPlayerVisible(false);
  };

  const startMainRadio = async () => {
    await setStreamUrl(RtgMainStream);
    showPlayer();
    playAudio();
  };

  const returnToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", showReturnToTopBtn);

  return (
    <>
      <Hero handleOnClick={startMainRadio} />
      <Player audioRef={audioRef} show={isPlayerVisible} close={closePlayer} />
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
      <audio ref={audioRef} src={currentAudio} />
    </>
  );
};

export default Main;
