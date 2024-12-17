import React from "react";
import Image from "next/image";
import bg from "@/assets/bg_bridge.jpeg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/utils/Reveal";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import { useTranslations } from "next-intl";

export default function SectionOne() {
  const t = useTranslations("HomePage");

  return (
    <Reveal>
      <div className="relative w-full">
        <Image
          src={bg}
          alt="Picture of a bridge"
          layout="fill"
          objectFit="cover"
        />
        {/* overlay filter */}
        <div className="absolute inset-0 bg-sky-600 opacity-30 z-10"></div>

        <div className="relative z-20 flex flex-col items-start justify-start text-start text-white p-10 sm:pl-10 pt-14 md:ml-5 lg:ml-10">
          <h1 className="text-4xl font-bold max-w-md leading-normal">
            {t("start.hello")}
          </h1>

          <p className="mt-4 font-semibold sm:font-normal sm:max-w-md text-sm">
            We bring expertise, compassion, and care to support you in
            navigating the complexities of immigration with confidence.
          </p>

          <Button
            variant="default"
            className="mt-4 mb-14 bg-primary-red hover:bg-red-700 text-primary-white-2 px-3 py-1 text-sm font-bold"
          >
            Book a free consultation
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
