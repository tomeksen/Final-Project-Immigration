"use client";

import React from "react";
import Lauta from "@/assets/lauta.jpeg";
import Maria from "@/assets/maria.jpeg";
import Juan from "@/assets/juan.jpeg";
import Image, { StaticImageData } from "next/image";
import google from "@/assets/google_reviews.png";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Reveal } from "@/utils/Reveal";
import { useTranslations } from "next-intl";

type TestimonialType = {
  name: string;
  visa: string;
  flag: string;
  img: string | StaticImageData;
  description: string;
};

export default function Testimonials() {
  const t = useTranslations("HomePage");
  const testimonials: TestimonialType[] = [
    {
      name: "Laura Ribeiro",
      visa: t("Testimonials.expressVisa"),
      flag: "🇧🇷",
      img: Lauta,
      description: t("Testimonials.LauraDescription"),
    },
    {
      name: "Maria Torres",
      visa: t("Testimonials.expressVisa"),
      flag: "🇨🇴",
      img: Maria,
      description: t("Testimonials.MariaDescription"),
    },
    {
      name: "Juan Sanchez",
      visa: t("Testimonials.permanentVisa"),
      flag: "🇲🇽",
      img: Juan,
      description: t("Testimonials.JuanDescription"),
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.9, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="p-4 sm:p-10 flex flex-col items-start md:mx-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <Reveal delay={0.1}>
        <SectionTitle text="Testimonials" />
      </Reveal>

      {/* Testimonial Cards */}
      <motion.div className="flex flex-wrap gap-6 justify-center items-center mx-auto mt-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md w-full sm:w-72 flex flex-col items-center rounded-lg overflow-hidden"
            variants={fadeInVariants}
            custom={index}
          >
            <Image
              src={testimonial.img as StaticImageData}
              alt={testimonial.name}
              className="w-full h-36 object-cover object-top"
            />
            <div className="p-4 text-justify">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.visa}</p>
                </div>
                <div className="text-2xl">{testimonial.flag}</div>
              </div>
              <p className="text-gray-700">"{testimonial.description}"</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Google Reviews Section */}
      <motion.div
        className="flex flex-col items-center mx-auto mt-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-2">
          <Image
            src={google}
            alt="Google Review"
            width={170}
            height={70}
            className="object-fill"
          />
          <p className="text-4xl font-bold text-blue-500 sm:hidden">5.0</p>
        </div>
        <p className="mb-4">{t("Testimonials.GoogleReview")}</p>

        <Button
          size="lg"
          className="bg-primary-red hover:bg-red-800 text-white font-bold text-lg"
        >
          {t("Testimonials.ReadButton")}
        </Button>
      </motion.div>
    </motion.div>
  );
}
