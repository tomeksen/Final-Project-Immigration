"use client";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { motion } from "framer-motion";

export default function OurStory() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-4">
      {/* Animated Section Title */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <SectionTitle text="Our Story" />
      </motion.div>

      {/* Animated Iframe */}
      <motion.div
        className="flex justify-center items-center mt-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.5 }}
      >
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/W3bUpEIK3Ac?si=Ykxfwhiv-MXRyGAi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
}
