"use client";
import { Reveal } from "@/utils/Reveal";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FreeConsultationBtn() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex items-center justify-center my-5">
      <Reveal>
        <Link href="/consultation">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary-red text-white hover:bg-red-700 p-1 text-wrap text-xs md:py-2 lg:px-2 lg:text-base rounded-xl font-semibold"
          >
            {t("freeConsultation")}
          </motion.button>
        </Link>
      </Reveal>
    </div>
  );
}
