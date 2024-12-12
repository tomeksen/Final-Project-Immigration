"use client";
import React from "react";
import Nav from "./MobileNavbar";
import Link from "next/link";
import { DarkModeToggle } from "@/components/utils/darkmode/DarkModeToggle";
import { ThemeLogo } from "@/components/utils/darkmode/ThemeLogo";
import LocaleSwitcher from "@/components/utils/language/LocaleSwitcher";
import { Reveal } from "@/utils/Reveal";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="mb-[2px] bg-white shadow-sm">
      <div className="mx-auto flex items-center px-4 justify-between">
        {/* Logo Section */}
        <Link href="/" aria-label="Go to homepage">
          <ThemeLogo />
        </Link>

        {/* Hamburger menu icon for mobile */}
        <div>
          <MobileNavbar />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center justify-center md:flex-1">
          <Navbar />
        </div>

        {/* Buttons and Locale/Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex xs:flex-col">
            <LocaleSwitcher />
          </div>
          <FreeConsultationBtn />
        </div>
      </div>
    </header>
  );
}
