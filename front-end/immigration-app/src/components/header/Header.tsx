"use client";
import React from "react";
import { DarkModeToggle } from "../DarkModeToggle";
import LocaleSwitcher from "../LocaleSwitcher";
import Nav from "./Navbar";
import { ThemeLogo } from "../ThemeLogo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-[2px] p-2 bg-white shadow-sm">
      <div className="container mx-auto flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0 md:space-x-4 px-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
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
          <LocaleSwitcher />
          <DarkModeToggle />
          <Link href="/consultation">
            <button className="bg-primary-red text-white py-2 px-4 rounded-xl font-semibold">
              Book a free consultation
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
