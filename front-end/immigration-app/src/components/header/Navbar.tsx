import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative flex-col text-center justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <IoCloseSharp /> : <BiMenu />}
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          }  md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 font-semibold`}
        >
          <li className="hover:text-primary-red">Immigrate</li>
          <li className="hover:text-primary-red">Work</li>
          <li className="hover:text-primary-red">Study</li>
          <li className="hover:text-primary-red">About Us</li>
          <li className="hover:text-primary-red">Contact</li>
          <li className="hover:text-primary-red">Blog</li>
        </ul>
      </nav>
    </>
  );
}
