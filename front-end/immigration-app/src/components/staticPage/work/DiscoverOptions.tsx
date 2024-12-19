import React from "react";
import { workOptions } from "./workOptions";
import Link from "next/link";
import { workOptionsCards } from "./workCards";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function DiscoverOptions() {
  const t = useTranslations("Work");
  // work options or work options cards?
  const works = workOptions(t);
  const workCards = workOptionsCards(t);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10">
      <SectionTitle text="Discover all you options" />

      <motion.div
        className="flex flex-wrap gap-2 justify-center sm:justify-start mb-8"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {works.map((option, index) => (
          <motion.div
            key={option.id}
            className="inline-block"
            variants={fadeInVariants}
            custom={index}
          >
            <Button
              key={option.id}
              variant="outline"
              className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
            >
              <Link href={`/work/${option.link}`}>{option.title}</Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Permit Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {workCards.map((permit, index) => (
          <motion.div
            key={permit.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow max-w-sm mx-auto"
            variants={fadeInVariants}
            custom={index}
          >
            {/* Permit Title and Dropdown Icon */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{permit.title}</h3>
              <MdOutlineKeyboardArrowDown className="w-5 h-5 text-red-600" />
            </div>

            {/* Program Description */}
            <p className="text-gray-600 text-sm mb-4">{permit.description}</p>

            {/* Program Image */}
            <Image
              src={permit.imageSrc}
              alt={permit.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
