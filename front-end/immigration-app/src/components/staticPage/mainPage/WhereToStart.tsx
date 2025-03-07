"use client";
import React from "react";
import { CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import { Reveal } from "@/utils/Reveal";
import { motion } from "framer-motion";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import { useTranslations } from "next-intl";

export default function WhereToStart() {
  const t = useTranslations("HomePage");
  const steps = [
    {
      number: 1,
      title: t("StartSection.Steps.step1"),
      description: t("StartSection.Steps.description1"),
    },
    {
      number: 2,
      title: t("StartSection.Steps.step2"),
      description: t("StartSection.Steps.description2"),
    },
    {
      number: 3,
      title: t("StartSection.Steps.step3"),
      description: t("StartSection.Steps.description3"),
    },
    {
      number: 4,
      title: t("StartSection.Steps.step4"),
      description: t("StartSection.Steps.description4"),
    },
    {
      number: 5,
      title: t("StartSection.Steps.step5"),
      description: t("StartSection.Steps.description5"),
    },
  ];

  // Variants for animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  return (
    <Reveal>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="p-6 md:p-10 items-center bg-gray-100"
      >
        <CardContent className="p-4 md:p-6">
          <SectionTitle text="Where to start?" />

          <div className="relative mt-8">
            {/* Timeline line */}
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:block absolute top-5 h-0.5 w-full bg-secondary-blue origin-left "
            />

            {/* Steps */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 text-center"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center"
                  variants={stepVariants}
                >
                  {/* Number circle */}
                  <div className="w-10 h-10 rounded-full bg-secondary-blue flex items-center justify-center text-primary-foreground font-bold relative z-10">
                    {step.number}
                  </div>

                  {/* Content */}

                  <h3 className="font-semibold text-lg md:text-xl mt-4 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-base md:text-lg text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Button */}
          <Reveal delay={1}>
            <FreeConsultationBtn />
          </Reveal>
        </CardContent>
      </motion.div>
    </Reveal>
  );
}
