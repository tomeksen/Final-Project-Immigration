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
            <div className="flex justify-center mb-6">
              <GrTrophy size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">+908</p>
            <p>Successful cases</p>
          </div>
          {/* //!folder */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center mb-6">
              <LuFolderCheck size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">+908</p>
            <p>Successful cases</p>
          </div>
          {/* //!translate */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center mb-6">
              <BsTranslate size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">+908</p>
            <p>Successful cases</p>
          </div>
          {/* //!book */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <div className="flex justify-center mb-6">
              <RiBook3Line size={70} />
            </div>
            <p className="text-red-600 text-2xl font-bold">+908</p>
            <p>Successful cases</p>
          </div>
        </div>
      </div>
    </div>
  );
}
