import React, { useState, useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import { store } from "react-notifications-component";
import Hero from "../components/Hero.component";
import Player from "../components/Player.component";
import BreakSectionOne from "../components/BreakSectionOne.component";
import BreakSectionTwo from "../components/BreakSectionTwo.component";
import InfoSection from "../components/InfoSection.component";
import ShowModal from "../components/ShowModal.component";
import Shows from "../components/Shows.component";
import StreamsSection from "../components/StreamsSection.component";
import ContactSection from "../components/ContactSection.component";
import AndroidApp from "../components/AndroidApp.component";
import Footer from "../components/Footer.component";
import BtnToTop from "../components/BtnToTop.component";
import BtnPlayerMin from "../components/BtnPlayerMin.component";

//online data
import { db } from "../data/online/FirebaseAPI";

//local data
import {
  aboutUsData,
  marketYourBusinessData,
  weddingAndOtherData,
} from "../data/local/InfoSectionData";
import imageAbout from "../assets/img_about.jpg";
import imageBusiness from "../assets/img_business.jpg";
import imageWedding from "../assets/img_wedding.jpg";
import {
  RtgMainStream,
  RtgMusicStream,
  RtgBastinaStream,
  RtgFramaStream,
  RtgDjecjiStream,
  RtgDomovinaStream,
} from "../data/local/StreamRadioUrls";
import bckRtgMain from "../assets/img_player_main.jpg";
import bckRtgMusic from "../assets/img_player_music.jpg";
import playerImageBastina from "../assets/img_player_bastina.jpg";
import playerImageFrama from "../assets/img_player_frama.jpg";
import playerImageDjecji from "../assets/img_player_djecji.jpg";
import playerImageDomovina from "../assets/img_player_domovina.jpg";
import imageDef from "../assets/img_def_player.jpg";
import StreamMenuCard from "../components/StreamMenuCard.component";

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

  //shows
  const [selectedShow, setSelectedShow] = useState();
  const [zrcaloShow, setZrcaloShow] = useState({
    showTitle: "",
    showList: [],
  });
  const [strunicaShow, setStrunicaShow] = useState({
    showTitle: "",
    showList: [],
  });
  const [glazbaonicaShow, setGlazbaonicaShow] = useState({
    showTitle: "",
    showList: [],
  });
  const [petmilShow, setPetmilShow] = useState({
    showTitle: "",
    showList: [],
  });
  const [obiteljskiShow, setObiteljskiShow] = useState({
    showTitle: "",
    showList: [],
  });
  const [razgovoriShow, setRazgovoriShow] = useState({
    showTitle: "",
    showList: [],
  });
  const [slusamShow, setSlusamShow] = useState({
    showTitle: "",
    showList: [],
  });
  const [knjiznicaShow, setKnjiznicaShow] = useState({
    showTitle: "",
    showList: [],
  });
  const [forumShow, setForumShow] = useState({
    showTitle: "",
    showList: [],
  });

  //showList
  const [isShowListVisible, setIsShowListVisible] = useState(false);

  //streamList
  const [isStreamListVisible, setIsStreamListVisible] = useState(false);

  useEffect(() => {
    getFirebaseData();
  }, []);

  //audioRef
  const audioRef = useRef(null);

  const getFirebaseData = () => {
    getZrcaloShow();
    getForumShow();
    getStrunicaShow();
    getGlazbaonicaShow();
    getPetmilShow();
    getObiteljskiShow();
    getRazgovoriShow();
    getSlusamShow();
    getKnjiznicaShow();
  };

  const getZrcaloShow = async () => {
    await db
      .collection("radioShow/01zrcalo/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setZrcaloShow({ showTitle: "U dnevnom zrcalu", showList: data });
      });
  };

  const getForumShow = async () => {
    await db
      .collection("radioShow/09forum/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setForumShow({ showTitle: "RTG Forum", showList: data });
      });
  };

  const getStrunicaShow = async () => {
    await db
      .collection("radioShow/02strunica/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setStrunicaShow({
          showTitle: "Šarenica, strunica, tkanica",
          showList: data,
        });
      });
  };

  const getGlazbaonicaShow = async () => {
    await db
      .collection("radioShow/03glazbaonica/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setGlazbaonicaShow({
          showTitle: "Glazbaonica",
          showList: data,
        });
      });
  };

  const getPetmilShow = async () => {
    await db
      .collection("radioShow/04petmil/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setPetmilShow({
          showTitle: "Klub Pet Mil",
          showList: data,
        });
      });
  };

  const getObiteljskiShow = async () => {
    await db
      .collection("radioShow/05obiteljski/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setObiteljskiShow({
          showTitle: "Obiteljski album",
          showList: data,
        });
      });
  };

  const getRazgovoriShow = async () => {
    await db
      .collection("radioShow/06razgovori/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setRazgovoriShow({
          showTitle: "Razgovori ugodni",
          showList: data,
        });
      });
  };

  const getSlusamShow = async () => {
    await db
      .collection("radioShow/07slusam/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSlusamShow({
          showTitle: "Slušam, dakle učim!",
          showList: data,
        });
      });
  };

  const getKnjiznicaShow = async () => {
    await db
      .collection("radioShow/08knjiznica/showEntity")
      .orderBy("stamp", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setKnjiznicaShow({
          showTitle: "Radio knjižnica",
          showList: data,
        });
      });
  };

  const showReturnToTopBtn = () => {
    if (window.scrollY >= 130) {
      setReturnToTop(true);
    } else {
      setReturnToTop(false);
    }
  };

  const playAudio = () => {
    const audioPromise = audioRef.current.play();

    if (audioPromise !== undefined) {
      audioPromise
        .then((_) => {
          setIsPlaying(true);
        })
        .catch((err) => {
          // catch dom exception
          console.info(err);
        });
    }
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
    showPlayerNotification();
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
      playerSubTitle: "Radio RTG uživo",
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

  const startRtgBastina = async () => {
    await setCurrentAudio({
      playerImage: playerImageBastina,
      playerTitle: "RTG Baština",
      playerSubTitle: "Čuvajmo naš indentitet",
      playerUrl: RtgBastinaStream,
    });
    showPlayer();
    playAudio();
  };

  const startRtgFrama = async () => {
    await setCurrentAudio({
      playerImage: playerImageFrama,
      playerTitle: "RTG Frama",
      playerSubTitle: "Rastimo u Kristu",
      playerUrl: RtgFramaStream,
    });
    showPlayer();
    playAudio();
  };

  const startRtgDjecji = async () => {
    await setCurrentAudio({
      playerImage: playerImageDjecji,
      playerTitle: "RTG Dječji",
      playerSubTitle: "Za naše mališane",
      playerUrl: RtgDjecjiStream,
    });
    showPlayer();
    playAudio();
  };

  const startRtgDomovina = async () => {
    await setCurrentAudio({
      playerImage: playerImageDomovina,
      playerTitle: "RTG Dom",
      playerSubTitle: "Uvijek svoj na svome",
      playerUrl: RtgDomovinaStream,
    });
    showPlayer();
    playAudio();
  };

  const restartPlayer = () => {
    let currentAudioStream = currentAudio;

    pauseAudio();
    setCurrentAudio({
      playerUrl: null,
      currentPlayingTime: 0,
      durationOfFile: 0,
    });
    setCurrentAudio({
      playerUrl: currentAudioStream.playerUrl,
    });
    playAudio();
  };

  const handleError = () => {
    console.log(audioRef.current.error);

    if (audioRef.current.error.code === 2 || 3) {
      restartPlayer();
    }
  };

  const sendShowData = async (id) => {
    switch (id) {
      case "00":
        return await setSelectedShow(zrcaloShow);
      case "01":
        return await setSelectedShow(strunicaShow);
      case "02":
        return await setSelectedShow(petmilShow);
      case "03":
        return await setSelectedShow(glazbaonicaShow);
      case "04":
        return await setSelectedShow(razgovoriShow);
      case "05":
        return await setSelectedShow(obiteljskiShow);
      case "06":
        return await setSelectedShow(slusamShow);
      case "07":
        return await setSelectedShow(knjiznicaShow);
      case "08":
        return await setSelectedShow(forumShow);
      default:
        return [];
    }
  };

  const handleShowPlaying = async (show) => {
    let showDefultImage = null;

    if (show.image == null) {
      showDefultImage = bckRtgMain;
    } else {
      showDefultImage = show.image;
    }

    closeShowList();
    await setCurrentAudio({
      playerImage: showDefultImage,
      playerTitle: show.title,
      playerSubTitle: show.date,
      playerUrl: show.showUrl,
    });
    showPlayer();
    playAudio();
  };

  const showShowList = (id) => {
    sendShowData(id);
    setIsShowListVisible(true);
  };

  const closeShowList = () => {
    setIsShowListVisible(false);
  };

  const showStreamList = () => {
    setIsStreamListVisible(true);
  };

  const closeStreamList = () => {
    setIsStreamListVisible(false);
  };

  const returnToTop = () => {
    scroll.scrollToTop();
  };

  const showPlayerNotification = () => {
    if (isPlaying && currentAudio.playerTitle !== null) {
      store.addNotification({
        title: "Player je u pozadini",
        message: "Za povratak u player kliknite na ikonu note sa desne strane",
        type: "info",
        insert: "top",
        container: "top-center",
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }
  };

  window.addEventListener("scroll", showReturnToTopBtn);

  return (
    <>
      <Hero startMainStream={startMainRadio} openStreamMenu={showStreamList} />
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
      <BtnPlayerMin audio={currentAudio} click={showPlayer} />
      <InfoSection {...aboutUsData} image={imageAbout} order={true} />
      <BreakSectionOne />
      <StreamMenuCard
        show={isStreamListVisible}
        close={closeStreamList}
        startRtgMusic={startRtgMusic}
        startRtgFrama={startRtgFrama}
        startRtgBastina={startRtgBastina}
        startRtgDjecji={startRtgDjecji}
        startRtgDomovina={startRtgDomovina}
      />
      <ShowModal
        show={isShowListVisible}
        showData={selectedShow}
        startShow={handleShowPlaying}
        close={closeShowList}
      />
      <Shows showShowList={showShowList} />
      <StreamsSection
        startRtgMusic={startRtgMusic}
        startMainRadio={startMainRadio}
        startRtgBastina={startRtgBastina}
        startRtgFrama={startRtgFrama}
        startRtgDjecji={startRtgDjecji}
        startRtgDomovina={startRtgDomovina}
      />
      <BreakSectionTwo />
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
      <ContactSection />
      <AndroidApp />
      <Footer />
      <audio
        buffered
        ref={audioRef}
        src={currentAudio.playerUrl}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onError={handleError}
      />
    </>
  );
};

export default Main;
