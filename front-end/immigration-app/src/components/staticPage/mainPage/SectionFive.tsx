import React from "react";
import { GrTrophy } from "react-icons/gr";
import { LuFolderCheck } from "react-icons/lu";
import { BsTranslate } from "react-icons/bs";
import { RiBook3Line } from "react-icons/ri";
import SectionTitle from "@/components/SectionTitle";
import { Reveal } from "@/utils/Reveal";

export default function SectionFive() {
  return (
    <Reveal>
      <div className="p-6 md:p-10">
        <div className="p-4 md:p-6 ">
          <SectionTitle text="Why choose us" />
        </div>
        <div className="flex flex-col w-full md:flex-row gap-10 md:gap-20 items-center justify-center">
          <div className="flex-col justify-center align-middle items-center text-center">
            {/* //!trophy */}
            <div className="flex justify-center items-center mb-5">
              <GrTrophy size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold flex justify-center">
              +908
            </p>
            <p>Successful cases</p>
          </div>
          {/* //!folder */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center items-center mb-5">
              <LuFolderCheck size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">98%</p>
            <p>Approved rate</p>
          </div>
          {/* //!translate */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center items-center mb-5">
              <BsTranslate size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">3</p>
            <p>Languages</p>
            <p className="text-xs">English/ Portuguese/ Spanish</p>
          </div>
          {/* //!book */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center mb-5">
              <RiBook3Line size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">20</p>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
