"use client";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

export default function SectionOne() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const buttonHoverVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeInVariants} custom={0}>
        <SectionTitle text="Do you want to immigrate to Canada?" />
      </motion.div>

      <motion.div className="flex flex-col sm:flex-row w-full mb-5 justify-between gap-7 text-justify">
        <motion.p className="sm:w-1/2" variants={fadeInVariants} custom={1}>
          Canada is a top destination for individuals and families seeking new
          opportunities. With over 80 immigration programs available, including
          options for skilled workers, Labour Market Impact Assessments (LMIA),
          Provincial Nominee Programs (PNP), and family reunification, there are
          numerous pathways to becoming a permanent resident.
        </motion.p>
        <motion.p className="sm:w-1/2" variants={fadeInVariants} custom={2}>
          Our team at Up Immigration is here to guide you through the process,
          helping you find the program that best suits your needs for a
          successful transition to your new life in Canada. Contact us today to
          start your journey to Canada with confidence.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex justify-center items-center"
        variants={fadeInVariants}
        custom={3}
      >
        <motion.div whileHover="hover" variants={buttonHoverVariants}>
          <Button
            size="lg"
            className="bg-primary-red hover:bg-red-800 text-white font-bold text-lg"
          >
            Book a consultation
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
