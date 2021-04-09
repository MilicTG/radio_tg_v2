import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.component";

import locationImage from "../assets/img_location.jpg";
import { useScroll } from "../helpers/useScroll";
import {
  revelTextFromLeft,
  revelTextScaleAnimation,
} from "../animations/animations";

import { FaPhoneAlt, FaFax, FiMail, ImLocation2 } from "react-icons/all";

const ContactSection = () => {
  const [element, controls] = useScroll();

  return (
    <section
      id="contact"
      className="h-auto w-full flex justify-center px-4 xl:px-0"
    >
      <div className="max-w-con w-full flex justify-start flex-col md:flex-row items-center z-10 py-20 xl:py-32">
        <div className=" w-full">
          <SectionTitle title="Kontaktirajte nas" />

          <motion.div
            variants={revelTextFromLeft}
            initial="hidden"
            animate={controls}
            ref={element}
            className="w-full xl:w-72 flex flex-row xl:flex-row justify-start items-center py-8"
          >
            <div className="pr-4">
              <FaPhoneAlt size="2.5rem" className="text-indigo-400" />
            </div>
            <div>
              <h5 className="text-2xl text-gray-800 py-1">Telefon</h5>
              <p className="text-gray-800">
                <span className="font-bold">Redakcija:</span> +387 34 352 909
              </p>
              <p className="text-gray-800">
                <span className="font-bold">Marketing:</span> +387 34 353 768
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={revelTextFromLeft}
            initial="hidden"
            animate={controls}
            ref={element}
            className="w-full xl:w-72 flex flex-row justify-start items-center py-8"
          >
            <div className="pr-4">
              <FaFax size="2.5rem" className="text-yellow-400" />
            </div>
            <div>
              <h5 className="text-2xl text-gray-800 py-1">Fax</h5>
              <p className="text-gray-800">+387 34 353 768</p>
            </div>
          </motion.div>

          <motion.div
            variants={revelTextFromLeft}
            initial="hidden"
            animate={controls}
            ref={element}
            className="w-full xl:w-72 flex flex-row justify-start items-center py-8"
          >
            <div className="pr-4">
              <FiMail size="2.5rem" className="text-green-400" />
            </div>
            <div>
              <h5 className="text-2xl text-gray-800 py-1">E-Mail</h5>
              <p className="text-gray-800">radiotomislavgrad@gmail.com</p>
              <p className="text-gray-800">radio.tomislavgrad@tel.net.ba</p>
            </div>
          </motion.div>

          <motion.div
            variants={revelTextFromLeft}
            initial="hidden"
            animate={controls}
            ref={element}
            className="w-full xl:w-72 flex flex-row justify-start items-center py-8"
          >
            <div className="pr-4">
              <ImLocation2 size="2.5rem" className="text-red-400" />
            </div>
            <div>
              <h5 className="text-2xl text-gray-800 py-1">Adresa</h5>
              <p className="text-gray-800">Trg dr. Franje Tuđmana bb</p>
              <p className="text-gray-800">80240, Tomislavgrad, BiH</p>
            </div>
          </motion.div>
        </div>
        <motion.img
          variants={revelTextScaleAnimation}
          initial="hidden"
          animate={controls}
          ref={element}
          src={locationImage}
          className="h-72 w-full md:h-full md:w-6/12 lg:h-full lg:w-6/12 xl:h-96 xl:w-auto rounded-md shadow-2xl object-cover"
          alt=""
        />
      </div>
    </section>
  );
};

export default ContactSection;
