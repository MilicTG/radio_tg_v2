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
import bckRtgMain from "../assets/bck_stream_rtg.jpg";
import bckRtgMusic from "../assets/bck_stream_music.jpg";
import imageDef from "../assets/img_def_player.jpg";

const Main = () => {
  const [returnToTopBtn, setReturnToTop] = useState(false);

  //for player
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState({
    playerImage: imageDef,
    playerTitle: "",
    playerSubTitle: "",
    playerUrl: "",
    currentPlayingTime: 0,
    durationOfFile: 0,
  });

  //audioRef
  const audioRef = useRef(null);

  const showReturnToTopBtn = () => {
    if (window.scrollY >= 130) {
      setReturnToTop(true);
    } else {
      setReturnToTop(false);
    }
  };

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayer = () => {
    isPlaying ? pauseAudio() : playAudio();
  };

  const showPlayer = () => {
    setIsPlayerVisible(true);
  };

  const closePlayer = () => {
    setIsPlayerVisible(false);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    //calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);

    setCurrentAudio({
      ...currentAudio,
      currentPlayingTime: roundedCurrent,
      durationOfFile: roundedDuration,
    });
  };

  const startMainRadio = async () => {
    await setCurrentAudio({
      playerImage: bckRtgMain,
      playerTitle: "Radio Tomislavgrad",
      playerSubTitle: "Duvanjski radio",
      playerUrl: RtgMainStream,
    });
    showPlayer();
    playAudio();
  };

  const startRtgMusic = async () => {
    await setCurrentAudio({
      playerImage: bckRtgMusic,
      playerTitle: "RTG Music",
      playerSubTitle: "Najbolji internet radio",
      playerUrl: RtgMusicStream,
    });
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
      <Player
        audioRef={audioRef}
        show={isPlayerVisible}
        isPlaying={isPlaying}
        handlePlaying={handlePlayer}
        close={closePlayer}
        image={currentAudio.playerImage}
        title={currentAudio.playerTitle}
        subTitle={currentAudio.playerSubTitle}
        currentTime={currentAudio.currentPlayingTime}
        duration={currentAudio.durationOfFile}
      />
      <BtnToTop show={returnToTopBtn} click={returnToTop} />
      <InfoSection {...aboutUsData} image={imageAbout} order={true} />
      <BreakSectionOne />
      <Shows />
      <RTGMusic handleOnClick={startRtgMusic} />
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
      <audio
        ref={audioRef}
        src={currentAudio.playerUrl}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      />
    </>
  );
};

export default Main;
