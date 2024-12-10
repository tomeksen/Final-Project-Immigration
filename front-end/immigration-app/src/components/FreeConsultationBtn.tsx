"use client";
import { Reveal } from "@/utils/Reveal";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function FreeConsultationBtn() {
  return (
    <div className="flex items-center justify-center my-5">
      <Reveal>
        <Link href="/consultation">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary-red text-white hover:bg-red-700 p-2 sm:text-sm md:py-2 md:px-4 lg:text-base rounded-xl font-semibold"
          >
            Book a free consultation
          </motion.button>
        </Link>
      </Reveal>
    </div>
  );
}
