import React from "react";
import larissa from "@/assets/larissa_up_immigration.png";
import Image from "next/image";
import member1 from "@/assets/aboutUs/man.jpeg";
import member2 from "@/assets/aboutUs/woman.jpeg";
export default function Team() {
  return (
    <div>
      {" "}
      <div className="flex gap-4 mb-2">
        <Image src={larissa} alt="Larissa Castelluber" className="w-2/4" />
        <div>
          <h3 className="font-semibold">Larissa Castelluber</h3>
          <p className="text-xs text-gray-500 mb-3">RCIC</p>
          <div className="">
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
      <div>
        <div className="flex gap-5">
          <Image
            src={member1}
            alt="Larissa Castelluber"
            className="w-52 h-52 object-cover rounded-lg"
          />
          <Image
            src={member2}
            alt="Larissa Castelluber"
            className="w-52 h-52 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
