import React from "react";
import BtnPlay from "./BtnPlay.component";

const Hero = () => {
  return (
    <header className="h-screen">
      <div className="h-screen bg-hero bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <div className="min-w-con flex h-full flex-col justify-center items-start">
          <div className="my-28">
            <h1 className="text-8xl text-white">Radio Tomislavgrad</h1>
            <h3
              className="text-3xl text-white font-thin
            my-3 tracking-heroWide"
            >
              95.1,95.9 i 103.3Mhz
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <BtnPlay />
            <h3 className="text-xl text-white mx-8">Slusajte RTG uzivo</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
