import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import quiz from "@/assets/graphic_tasks_girl_pencil.png";
import { Button } from "../ui/button";
import { MdOutlineArrowForward } from "react-icons/md";

export default function SectionFour() {
  return (
    <div className="p-10 items-center bg-gray-100 ml-auto">
      <div className="ml-10">
        <SectionTitle text="Take the Quiz to find your immigration pathway!" />
        <p className="mb-5">
          By taking this quiz, you will discover which immigration pathway best
          fits your unique situation.
        </p>
        <div className="bg-sky-200 flex-col justify-center m-auto items-center align-middle w-2/5 rounded-lg relative">
          <Image src={quiz} alt="Graphic Image of a girl" className="m-auto" />
          <Button className="bg-primary-red w-full absolute bottom-0 h-14 font-bold text-3xl rounded-none rounded-b-lg hover:bg-red-800">
            Start Quiz! <MdOutlineArrowForward size={50} />
          </Button>
        </div>
      </div>
    </div>
  );
}
