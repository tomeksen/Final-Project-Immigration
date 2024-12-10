"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import handshake from "@/assets/work/handshake.jpeg";
import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import ImmigrationFAQ from "@/components/staticPage/immigratePage/ImmigrationFAQ";
import Testimonials from "@/components/staticPage/mainPage/Testimonials";
import WhereToStart from "@/components/staticPage/mainPage/WhereToStart";
import DiscoverOptions from "@/components/staticPage/work/DiscoverOptions";
import { motion } from "framer-motion";
import { Reveal } from "@/utils/Reveal";

export default function page() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
  return (
    <div>
      <Reveal delay={0.1}>
        <div className="h-80">
          <BgImageContainerHeader
            bgImage={handshake}
            alt="Handshake between workers"
            text="Work"
            className="object-cover h-32 md:object-bottom xl:object-center"
          />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <Breadcrumbs />
      </Reveal>
      <motion.div
        className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 "
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionTitle text="How to work in Canada?" />
        <p>
          Over 400,000 international workers come to Canada each year, playing a
          crucial role in the country's economy and diversity. Canada offers
          numerous opportunities for skilled workers seeking to advance their
          careers and gain international experience. Whether you're looking for
          temporary work or a permanent move, understanding your options is the
          first step toward working in Canada.
        </p>
        <br />
        <p>
          Our team at Up Immigration is here to guide you through the process,
          helping you find the program that best suits your needs for a
          successful transition to your new life in Canada. Contact us today to
          start your journey to Canada with confidence.
        </p>
        <FreeConsultationBtn />
      </motion.div>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <DiscoverOptions />
      </motion.div>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <WhereToStart />
      </motion.div>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
      >
        <ImmigrationFAQ />
      </motion.div>
    </div>
  );
}
