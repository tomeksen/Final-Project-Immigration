"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GetInTouchForm from "./GetInTouchForm";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 items-center md:flex-row"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Contact Information Section */}
      <motion.div
        className="w-full h-full md:w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col justify-between sm:gap-60 align-middle"
        variants={fadeIn}
      >
        <div className="h-full">
          <SectionTitle text="Get in touch" />
          <p className="flex items-center gap-1 mt-4 text-sm sm:text-base">
            <FaWhatsapp />
            +1 672-588-1360
          </p>
          <p className="flex items-center gap-1 mt-2 text-sm sm:text-base">
            <MdEmail />
            info@upimmigration.ca
          </p>
        </div>
        <div className="flex justify-center">
          <FreeConsultationBtn />
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="w-full md:w-1/2 bg-gray-50 p-5 rounded-lg shadow-md align-middle"
        variants={fadeIn}
      >
        <SectionTitle text="Send us a message" />
        <GetInTouchForm />
      </motion.div>
    </motion.div>
  );
}
