import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import larrisa from "@/assets/LarissaRCICLogo.png";

export default function HowCanWeHelp() {
  return (
    <div className="flex gap-4 flex-col justify-center items-center md:flex-row lg:flex-row mb-4">
      <div className="flex justify-center fill object-center items-center md:w-96 rounded-2xl">
        {/* image */}
        <Image
          src={larrisa}
          alt="Larissa Castelluber"
          className="rounded-2xl min-w-auto object-cover md:min-w-96 "
        />
      </div>
      <div>
        {/* text */}
        <SectionTitle text="How Can We Help You Today?" />
        <h3 className="font-semibold text-primary-red mb-5">
          Larissa Castelluber
        </h3>
        <p className="mb-5 md:mb-0">Hi there,</p>
        <p>
          I'm Larissa Castelluber, and I'm dedicated to helping you achieve your
          Canadian dream. I understand the challenges of the immigration process
          and am here to provide you with the support and guidance you need.
          Let's make your journey to Canada a successful and fulfilling one!
        </p>
      </div>
    </div>
  );
}
