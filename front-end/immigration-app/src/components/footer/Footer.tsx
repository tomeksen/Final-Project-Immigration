import React from "react";
import whiteLogo from "@/assets/logo/LOGO_WHITE.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import Services from "./Services";
import Company from "./Company";

export default function Footer() {
  return (
    <footer className="bg-primary-red py-8 px-4 md:px-16 text-white">
      <div className="container flex flex-col mx-auto md:flex-row justify-between gap-16 md:gap-32">
        {/* Logo */}
        <div className="flex-shrink-0 self-start">
          <Image src={whiteLogo} alt="White logo" width={150} height={100} />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 space-y-6 md:space-y-0">
          <div>
            <Services />
          </div>

          <div>
            <Company />
          </div>

          <div>
            <h1 className="text-lg font-bold">FAQs</h1>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <FaInstagram
            className="hover:text-gray-300 transition-colors duration-200"
            size={30}
          />
          <CiFacebook
            className="hover:text-gray-300 transition-colors duration-200"
            size={30}
          />
          <RiLinkedinBoxLine
            className="hover:text-gray-300 transition-colors duration-200"
            size={30}
          />
          <FaWhatsapp
            className="hover:text-gray-300 transition-colors duration-200"
            size={30}
          />
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-6 md:mt-8 text-center md:text-right text-sm">
        <p>© Up Immigration Consulting. All Rights Reserved</p>
      </div>
    </footer>
  );
}
