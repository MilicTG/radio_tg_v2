import React from "react";
import SectionTitle from "./SectionTitle.component";

const DocumentsSection = () => {
  return (
    <section
      id="docs"
      className="h-auto w-full px-4 xl:px-0 flex justify-center"
    >
      <div className="max-w-con w-full flex justify-start items-center z-10">
        <div className="py-20 w-full">
          <SectionTitle title="Natječaji" />

          <div className="w-full h-72 pt-2 pb-4 flex flex-col">
            <div className="w-full pt-2 pb-4 flex flex-col md:flex-row md:justify-between items-center border-b border-gray-800">
              <h4 className="text-xl text-gray-900">
                Plan javnih nabava 2022 - JP ”Radio Tomislavgrad d.o.o.“
                Tomislavgrad
              </h4>
              <a
                href="http://radiotg.com/docs/Plan Javnih Nabava 2022.pdf"
                className="text-blue-400 hover:text-blue-800"
                download
              >
                Preuzmi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
