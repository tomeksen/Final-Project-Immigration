import React from "react";
import Image from "next/image";
import larissa from "@/assets/larissa_up_immigration.png";
import cicc_ccic from "@/assets/cicc_ccic.png";
import SectionTitle from "@/components/SectionTitle";

export default function SectionTwo() {
  return (
    <div className="flex justify-center gap-8 p-10 items-center bg-gray-100">
      {/* text */}
      <div className="w-2/3">
        <SectionTitle text="Our consultant" />
        <h4 className="font-semibold text-xs mb-4">Larissa Castelluber</h4>
        <p>
          I'm committed to helping you realize your Canadian dream. I understand
          the complexities of the immigration process and am here to offer the
          support and guidance you need. Together, we can ensure your journey to
          Canada is successful and fulfilling.
        </p>
        <p>
          Proudly regulated and in good standing with the College of Immigration
          and Citizenship Consultants, Larissa Castelluber, registration
          R710678.{" "}
          <a className="underline underline-offset-2 cursor-pointer">
            Verify with ICCRC.
          </a>
        </p>
        <div className="flex mt-10 gap-14">
          <div>
            <p>Registration R710678</p>
            <a className="cursor-pointer text-red-500">Verify with ICCRC</a>
          </div>
          <div>
            <Image src={cicc_ccic} alt="CICC and CCIC logo" />
          </div>
        </div>
      </div>
      {/* img */}
      <div className="w-80 mr-12 ">
        <Image src={larissa} alt="Consultant Larissa" />
      </div>
    </div>
  );
}
