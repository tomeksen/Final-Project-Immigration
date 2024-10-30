import React from "react";
import Image from "next/image";
import bg from "@/assets/bg_bridge.jpeg";
import { Button } from "../ui/button";

export default function SectionOne() {
  return (
    <div className="relative w-full">
      <Image
        src={bg}
        alt="Picture of a bridge"
        layout="fill"
        objectFit="cover"
      />
      {/* overlay filter */}
      <div className="absolute inset-0 bg-sky-600 opacity-30 z-10"></div>

      <div className="relative z-20 flex flex-col items-start justify-start h-full w-full text-start text-white pl-14 pt-14">
        <h1 className="text-3xl font-bold max-w-md leading-normal">
          Start your Journey to Canada with us
        </h1>
        <p className="mt-4 max-w-md text-sm">
          We bring expertise, compassion, and care to support you in navigating
          the complexities of immigration with confidence.
        </p>
        <Button
          variant="default"
          className="mt-4 mb-14 bg-primary-red hover:bg-red-700 text-primary-white-2 px-3 py-1 text-sm font-bold"
        >
          Book a free consultation
        </Button>
      </div>
    </div>
  );
}
