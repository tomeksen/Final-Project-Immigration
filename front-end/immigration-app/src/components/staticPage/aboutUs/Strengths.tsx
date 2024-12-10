"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRegUser, FaRegHeart, FaCertificate } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import { IoRibbonOutline } from "react-icons/io5";
import Image from "next/image";
import rcic from "@/assets/rcic.png";
import capic from "@/assets/capic.png";
import SectionTitle from "@/components/SectionTitle";

export default function Strengths() {
  const features = [
    {
      icon: <FaRegUser size={32} />,
      title: "Personalized consultation",
      description:
        "Let's start from a free initial consultation to figure out what would be the best immigration pathway for you together.",
    },
    {
      icon: <FaRegHeart size={32} />,
      title: "Compassion & support in every step",
      description:
        "Experience a compassionate, welcoming approach, making your immigration journey more simple and supportive.",
    },
    {
      icon: <TbBriefcase2 size={32} />,
      title: "HR and LMIA expertise",
      description:
        "Benefit from over 5 years of experience in Human Resources and expert guidance on obtaining LMIA, ensuring a smooth work experience in Canada.",
    },
    {
      icon: <IoRibbonOutline size={32} />,
      title: "Our Credentials",
      description:
        "Proudly regulated by and in good standing with the College of Immigration and Citizenship Consultants. Larissa Castelluber.",
    },
  ];

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const logoAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionTitle text="Our strengths" />
      </motion.div>
      <div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-8 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              custom={index}
              variants={fadeIn}
            >
              <div className="text-black">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-red-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col p-4 sm:flex-row h-20 gap-5 justify-center items-center md:gap-10 md:h-24 lg:h-32 my-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.div variants={logoAnimation}>
          <Image
            src={rcic}
            alt="RCIC logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56"
          />
        </motion.div>
        <motion.div variants={logoAnimation}>
          <Image
            src={capic}
            alt="CAPIC ACPC logo"
            className="w-auto sm:h-10 md:h-20"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
