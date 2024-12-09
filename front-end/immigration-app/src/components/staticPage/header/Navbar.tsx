import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { Reveal } from "@/utils/Reveal";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Reveal>
      <motion.nav
        className="relative flex-col text-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <IoCloseSharp /> : <BiMenu />}
        </button>

        <motion.ul
          className={`${
            isOpen ? "block" : "hidden"
          }  md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 font-semibold`}
          variants={containerVariants}
        >
          {[
            { href: "/immigrate", label: "Immigrate" },
            { href: "/work", label: "Work" },
            { href: "/study", label: "Study" },
            { href: "/aboutUs", label: "About Us" },
            { href: "/contact", label: "Contact" },
            { href: "https://www.upimmigration.ca/blog", label: "Blog" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="hover:text-primary-red"
              variants={itemVariants}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </Reveal>
  );
}
