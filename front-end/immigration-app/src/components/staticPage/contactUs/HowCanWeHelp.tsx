"use client";
import React from "react";
import Image from "next/image";
import larrisa from "@/assets/LarissaRCICLogo.png";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

export default function HowCanWeHelp() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      className="flex gap-4 flex-col justify-center items-center md:flex-row lg:flex-row my-5"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex justify-center fill object-center items-center md:w-96 rounded-2xl"
        variants={fadeInVariants}
        custom={1}
      >
        {/* image */}
        <Image
          src={larrisa}
          alt="Larissa Castelluber"
          className="min-w-auto object-cover md:min-w-96 "
        />
      </motion.div>
      <motion.div variants={fadeInVariants} custom={2}>
        {/* text */}
        <SectionTitle text="How Can We Help You Today?" />
        <h3 className="font-semibold text-primary-red mb-5">
          Larissa Castelluber
        </h3>
        <p className="mb-5 md:mb-0">Hi there,</p>
        <p>
          I'm Larissa Castelluber, and I'm dedicated to helping you achieve your
          Canadian dream. I understand the challenges of the immigration process
          and am here to provide you with the support and guidance you need.
          Let's make your journey to Canada a successful and fulfilling one!
        </p>
      </motion.div>
    </motion.div>
  );
}
