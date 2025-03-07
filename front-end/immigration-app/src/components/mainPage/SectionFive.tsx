import React from "react";
import SectionTitle from "../SectionTitle";
import { GrTrophy } from "react-icons/gr";
import { LuFolderCheck } from "react-icons/lu";
import { BsTranslate } from "react-icons/bs";
import { RiBook3Line } from "react-icons/ri";

export default function SectionFive() {
  return (
    <div className="p-10 ml-auto">
      <div className="ml-10">
        <SectionTitle text="Why choose us" />
        <div className="md:flex gap-20 items-center justify-center text-center m-auto">
          <div className="flex-col justify-center align-middle items-center text-center">
            {/* //!trophy */}
            <div className="flex justify-center mb-10">
              <GrTrophy size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">+908</p>
            <p>Successful cases</p>
          </div>
          {/* //!folder */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center mb-10">
              <LuFolderCheck size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">98%</p>
            <p>Approved rate</p>
          </div>
          {/* //!translate */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center mb-10">
              <BsTranslate size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">3</p>
            <p>Languages</p>
            <p className="text-xs">English/ Portuguese/ Spanish</p>
          </div>
          {/* //!book */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center mb-10">
              <RiBook3Line size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">20</p>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
