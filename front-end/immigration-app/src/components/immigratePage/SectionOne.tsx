import React from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";

export default function SectionOne() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 ">
      <SectionTitle text="Do you want to immigrate to Canada?" />
      <div className="flex flex-col sm:flex-row w-full mb-5 justify-between gap-7 text-justify">
        <p className="sm:w-1/2">
          Canada is a top destination for individuals and families seeking new
          opportunities. With over 80 immigration programs available, including
          options for skilled workers, Labour Market Impact Assessments (LMIA),
          Provincial Nominee Programs (PNP), and family reunification, there are
          numerous pathways to becoming a permanent resident.
        </p>
        <p className="sm:w-1/2">
          Our team at Up Immigration is here to guide you through the process,
          helping you find the program that best suits your needs for a
          successful transition to your new life in Canada. Contact us today to
          start your journey to Canada with confidence.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Button
          size="lg"
          className="bg-primary-red hover:bg-red-800 text-white font-bold text-lg"
        >
          Book a consultation
        </Button>
      </div>
    </div>
  );
}
