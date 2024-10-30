"use client";
import React from "react";
import { DarkModeToggle } from "../DarkModeToggle";
import LocaleSwitcher from "../LocaleSwitcher";
import Nav from "./Navbar";
import { ThemeLogo } from "../ThemeLogo";

export default function Header() {
  return (
    <header className="mb-[2px] p-2">
      <div className="container mx-auto flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0 md:space-x-4">
        <div className="flex items-center justify-center space-x-2 md:justify-start">
          <ThemeLogo />
        </div>

        <div className="flex items-center justify-center md:flex">
          <Nav />
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex md:ml-8">
            <LocaleSwitcher />
            <DarkModeToggle />
          </div>
          <button className="md:inline-block bg-primary-red text-white py-2 px-4 rounded-xl font-semibold">
            Book a free consultation
          </button>
        </div>
      </div>
    </header>
  );
}
