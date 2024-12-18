"use client";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { programCards } from "./programCards";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function SectionTwo() {
  const t = useTranslations("Immigration");

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Generate immigrationOptions dynamically with translations
  const immigrationOptions = [
    { id: 1, title: t("DiscoverOptions.option1"), link: "expressEntry" },
    { id: 2, title: t("DiscoverOptions.option2"), link: "provincialNominee" },
    { id: 3, title: t("DiscoverOptions.option3"), link: "familySponsor" },
    { id: 4, title: t("DiscoverOptions.option4"), link: "caregiver" },
    { id: 5, title: t("DiscoverOptions.option5"), link: "startUpVisa" },
    { id: 6, title: t("DiscoverOptions.option6"), link: "selfEmployed" },
    {
      id: 7,
      title: t("DiscoverOptions.option7"),
      link: "humanitarianCompassionate",
    },
    { id: 8, title: t("DiscoverOptions.option8"), link: "atlanticImmigration" },
    { id: 9, title: t("DiscoverOptions.option9"), link: "northernImmigration" },
  ];

  return (
    <motion.div
      className="px-4 sm:px-8 lg:px-16 pb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.div variants={fadeInVariants} custom={0} className="mb-8">
        <SectionTitle text={t("DiscoverOptions.title")} />
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap gap-2 justify-center sm:justify-start mb-8"
        initial="hidden"
        animate="visible"
      >
        {immigrationOptions.map((option, index) => (
          <motion.div
            key={option.id}
            variants={fadeInUpVariants}
            custom={index}
          >
            <Button
              variant="outline"
              className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
            >
              <Link href={`/immigrate/${option.link}`}>{option.title}</Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Program Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
      >
        {programCards.map((program, index) => (
          <motion.div
            key={program.title}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow max-w-sm mx-auto"
            variants={fadeInUpVariants}
            custom={index}
          >
            {/* Program Title and Dropdown Icon */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{program.title}</h3>
              <MdOutlineKeyboardArrowDown className="w-5 h-5 text-red-600" />
            </div>

            {/* Program Description */}
            <p className="text-gray-600 text-sm mb-4">{program.description}</p>

            {/* Program Image */}
            <Image
              src={program.imageSrc}
              alt={program.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
