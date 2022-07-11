import SectionTitle from "./SectionTitle.component";

const SectionLiveCamera = () => {
  return (
    <section
      id="live_cam"
      className="h-auto w-full px-4 xl:px-0 flex justify-center"
    >
      <div className="max-w-con w-full flex flex-col justify-start items-center z-10">
        <div className="py-20 w-full">
          <SectionTitle title="RTG Kamera uživo" />
        </div>

        <div className="w-full h-auto pb-28">
          <iframe
            className="w-full sm:h-72 md:h-80 lg:h-96 xl:h-screen 2xl:h-screen"
            src="https://www.youtube.com/embed/GrKXS3BxMBI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SectionLiveCamera;
