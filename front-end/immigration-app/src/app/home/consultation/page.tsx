"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import GetInTouchForm from "@/components/staticPage/contactUs/GetInTouchForm";
import { Reveal } from "@/utils/Reveal";
import React from "react";
import { motion } from "framer-motion";

export default function page() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 ">
      <Reveal>
        <Breadcrumbs />
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInVariants} custom={0}>
          <SectionTitle text="Book a free initial consultation" />
        </motion.div>
        <motion.div
          className="w-full m-auto md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md"
          variants={fadeInVariants}
          custom={1}
        >
          <GetInTouchForm />
        </motion.div>
      </motion.div>
    </div>
  );
}
