import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileNavbar() {
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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      e;
    }
  };
  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <IoCloseSharp className="w-6 h-6" />
        ) : (
          <BiMenu className="w-6 h-6" />
        )}
      </button>
      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <motion.nav
            className="bg-white w-3/4 max-w-sm mx-auto p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <motion.ul
              className="flex flex-col space-y-4 text-center font-semibold"
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
                  className="hover:text-primary-red text-sm lg:text-base"
                  variants={itemVariants}
                >
                  <Link href={item.href}>
                    <button onClick={() => setIsOpen(false)}>
                      {item.label}
                    </button>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </div>
      )}
    </>
  );
}
