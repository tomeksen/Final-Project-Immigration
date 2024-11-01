import React from "react";
import whiteLogo from "@/assets/logo/LOGO_WHITE.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-primary-red">
      <div className="flex gap-5">
        <div>
          <Image src={whiteLogo} alt="White logo" width={150} height={100} />
        </div>
        <div>nav</div>
        <div className="flex gap-2">
          <FaInstagram className="text-white" />
          <CiFacebook className="text-white" />
          <RiLinkedinBoxLine className="text-white" />
          <FaWhatsapp className="text-white" />
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-white">
          ©Up Immigration Consulting. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
