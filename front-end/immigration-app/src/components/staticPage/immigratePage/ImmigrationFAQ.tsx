"use client";
import React from "react";
import { FAQ } from "./FAQ";
import SectionTitle from "@/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function ImmigrationFAQ() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  const accordionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="pt-10 px-4 sm:px-8 lg:px-16 pb-10 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.div variants={fadeInVariants} custom={0} className="mb-8">
        <SectionTitle text="Immigration Frequent Questions" />
      </motion.div>

      {/* Accordion */}
      <motion.div className="w-full" variants={fadeInVariants} custom={1}>
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((question, index) => (
            <motion.div
              key={question.id}
              variants={accordionVariants}
              custom={index}
            >
              <AccordionItem value={question.id}>
                <AccordionTrigger className="text-base sm:text-lg md:text-xl">
                  {`${question.id}. ${question.title}`}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base md:text-lg">
                  {question.description}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
}
