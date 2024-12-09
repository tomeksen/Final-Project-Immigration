import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Section {
  title: string;
  img: string | StaticImageData;
  imgDescription: string;
  paragraph: string;
}

export default function SectionTPT({
  title,
  img,
  imgDescription,
  paragraph,
}: Section) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.8, duration: 0.8, ease: "easeOut" },
    }),
  };
  return (
    <motion.div
      className="my-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="font-semibold text-xl"
        variants={fadeInUp}
        custom={0}
      >
        {title}
      </motion.h3>
      <motion.div
        className="my-5 flex justify-center sm:justify-start"
        variants={fadeInUp}
        custom={0}
      >
        {typeof img === "string" ? (
          <img src={img} alt={imgDescription} />
        ) : (
          <Image
            src={img}
            alt={imgDescription}
            className="w-96 h-60 object-cover rounded-lg flex justify-center"
          />
        )}
      </motion.div>
      <motion.p variants={fadeInUp} custom={0}>
        {paragraph}
      </motion.p>
    </motion.div>
  );
}
