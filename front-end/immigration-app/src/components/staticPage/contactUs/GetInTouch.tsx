import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GetInTouchForm from "./GetInTouchForm";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import SectionTitle from "@/components/SectionTitle";

export default function GetInTouch() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 items-center md:flex-row">
      {/* Contact Information Section */}
      <div className="w-full h-full md:w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col justify-between sm:gap-40">
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
        <div className="mt-4 md:mt-auto flex justify-center">
          <FreeConsultationBtn />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
        <SectionTitle text="Send us a message" />
        <div className="mt-4">
          <GetInTouchForm />
        </div>
      </div>
    </div>
  );
}
