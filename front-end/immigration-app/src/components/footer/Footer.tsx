import React from "react";
import whiteLogo from "@/assets/logo/LOGO_WHITE.png";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Services from "./Services";
import Company from "./Company";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-red py-8 px-4 md:px-10 text-white">
      <div className="container mx-auto items-center flex flex-col justify-between gap-8 sm:flex-col md:flex-row">
        {/* Logo */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image src={whiteLogo} alt="White logo" width={150} height={100} />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-6 md:gap-12">
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
        <div className="flex flex-wrap align-middle justify-center gap-4 mt-6 md:mt-0">
          <Link href="http://instagram.com/upimmigration">
            <FaInstagram
              className="hover:text-gray-300 transition-colors duration-200"
              size={30}
            />
          </Link>
          <Link href="https://www.facebook.com/upimmigration/">
            <CiFacebook
              className="hover:text-gray-300 transition-colors duration-200"
              size={30}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/upimmigration">
            <RiLinkedinBoxLine
              className="hover:text-gray-300 transition-colors duration-200"
              size={30}
            />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=16725881360">
            <FaWhatsapp
              className="hover:text-gray-300 transition-colors duration-200"
              size={30}
            />
          </Link>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="flex justify-end mt-6 md:mt-8 text-center text-sm">
        <p>© Up Immigration Consulting. All Rights Reserved</p>
      </div>
    </footer>
  );
}
