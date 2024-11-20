"use client";
import React from "react";
import Nav from "./Navbar";
import Link from "next/link";
import { DarkModeToggle } from "@/components/utils/darkmode/DarkModeToggle";
import { ThemeLogo } from "@/components/utils/darkmode/ThemeLogo";
import LocaleSwitcher from "@/components/utils/language/LocaleSwitcher";

export default function Header() {
  return (
    <header className="mb-[2px] p-2 bg-white shadow-sm">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2 px-4 sm:mx-0 md:flex-row md:justify-between md:space-y-0 md:mx-auto">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full xs:hidden md:w-auto">
          <Link href="/">
            <ThemeLogo />
          </Link>
          {/* Hamburger menu icon for mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <Nav />
            <DarkModeToggle />
            <LocaleSwitcher />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center justify-center md:flex-1">
          <Nav />
        </div>

        {/* Buttons and Locale/Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex xs:flex-col">
            <LocaleSwitcher />
            <DarkModeToggle />
          </div>
          <Link href="/consultation">
            <button className="bg-primary-red text-white sm:text-sm sm:p-1 md:py-2 md:px-4 rounded-xl font-semibold ">
              Book a free consultation
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
