"use client";
import React from "react";
import larissa from "@/assets/LarissaCastelluber.jpeg";
import Image from "next/image";
import member1 from "@/assets/aboutUs/man.jpeg";
import member2 from "@/assets/aboutUs/woman.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Team() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
    }),
  };

  // const staggerContainer = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { staggerChildren: 0.6 } },
  // };
  return (
    <div className="p-4">
      {/* higher section */}
      <motion.div
        className="flex flex-col justify-center items-center md:flex lg:flex-row gap-4 mb-4"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1.5}
      >
        {/* Larissa's picture */}
        <motion.div
          className="rounded-2xl min-w-96 h-96 fill"
          variants={fadeIn}
        >
          <Image
            src={larissa}
            alt="Larissa Castelluber"
            className="rounded-2xl object-cover w-full h-96"
          />
        </motion.div>

        {/* text description of Larissa */}
        <motion.div className="w-full" variants={fadeIn}>
          <h3 className="font-semibold text-lg md:text-xl">
            Larissa Castelluber
          </h3>
          <p className="text-xs text-gray-500 mb-3">RCIC</p>
          <div className="text-sm md:text-base">
            <p className="mb-5">
              Meet Larissa, a highly qualified and dedicated Regulated Canadian
              Immigration Consultant (RCIC). Larissa is a member of the
              Immigration Consultants of Canada Regulatory Council (ICCRC) and
              the Canadian Association of Professional Immigration Consultants
              (CAPIC).
            </p>
            <p>
              Larissa brings with her a solid educational background to her
              practice. She holds a certificate in Canadian Immigration Law,
              Policy, and Procedures from the University of British Columbia
              (UBC), making her well-versed in the legal and regulatory aspects
              of the Canadian immigration process.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* lower section with the 2 other employees */}
      <motion.div
        className="flex flex-col items-center md:flex-row md:items-start gap-2 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div className="relative w-48 h-48" variants={fadeIn} custom={0}>
          <Image
            src={member1}
            alt="Member 1"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-3 text-white">
            <p className="font-semibold">Name</p>
            <p>Position</p>
          </div>
        </motion.div>

        <motion.div className="relative w-48 h-48" variants={fadeIn} custom={1}>
          <Image
            src={member2}
            alt="Member 2"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-3 text-white">
            <p className="font-semibold">Name</p>
            <p>Position</p>
          </div>
        </motion.div>

        {/* Consultation button */}
        <motion.div className="mt-4 md:mt-0" variants={fadeIn} custom={2}>
          <Link href="/consultation">
            <button className="bg-primary-red text-white py-2 px-9 rounded-xl font-semibold">
              Book a consultation
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
