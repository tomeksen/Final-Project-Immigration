import React from "react";
import larissa from "@/assets/larissa_up_immigration.png";
import Image from "next/image";
import member1 from "@/assets/aboutUs/man.jpeg";
import member2 from "@/assets/aboutUs/woman.jpeg";
import Link from "next/link";

export default function Team() {
  return (
    <div className="p-4">
      {/* higher section */}
      <div className="flex flex-col md:flex lg:flex-row gap-4 mb-4">
        {/* Larissa's picture */}
        <Image
          src={larissa}
          alt="Larissa Castelluber"
          className="w-full md:w-96 md:h-96"
        />

        {/* text description of Larissa */}
        <div className="w-full">
          <h3 className="font-semibold text-lg md:text-xl">
            Larissa Castelluber
          </h3>
          <p className="text-xs text-gray-500 mb-3">RCIC</p>
          <div className="text-sm md:text-base">
            <p className="mb-5">
              Meet Larissa, a highly qualified and dedicated Regulated Canadian
              Immigration Consultant (RCIC). Larissa is a member of the
              Immigration Consultants of Canada Regulatory Council (ICCRC) and
              the Canadian Association of Professional Immigration Consultants
              (CAPIC).
            </p>
            <p>
              Larissa brings with her a solid educational background to her
              practice. She holds a certificate in Canadian Immigration Law,
              Policy, and Procedures from the University of British Columbia
              (UBC), making her well-versed in the legal and regulatory aspects
              of the Canadian immigration process.
            </p>
          </div>
        </div>
      </div>

      {/* lower section with the 2 other employees */}
      <div className="flex flex-col items-center md:flex-row md:items-start gap-2 ">
        <div className="relative w-48 h-48">
          <Image
            src={member1}
            alt="Member 1"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-3 text-white">
            <p className="font-semibold">Name</p>
            <p>Position</p>
          </div>
        </div>

        <div className="relative w-48 h-48">
          <Image
            src={member2}
            alt="Member 2"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-3 text-white">
            <p className="font-semibold">Name</p>
            <p>Position</p>
          </div>
        </div>

        {/* Consultation button */}
        <div className="mt-4 md:mt-0">
          <Link href="/consultation">
            <button className="bg-primary-red text-white py-2 px-9 rounded-xl font-semibold">
              Book a consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
