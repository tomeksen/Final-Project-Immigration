import React from "react";
import { GrTrophy } from "react-icons/gr";
import { LuFolderCheck } from "react-icons/lu";
import { BsTranslate } from "react-icons/bs";
import { RiBook3Line } from "react-icons/ri";
import SectionTitle from "@/components/SectionTitle";
import { Reveal } from "@/utils/Reveal";
import { useTranslations } from "next-intl";

export default function SectionFive() {
  const t = useTranslations("HomePage");
  return (
    <Reveal>
      <div className="p-6 md:p-10">
        <Reveal delay={0.3}>
          <div className="p-4 md:p-6 ">
            <SectionTitle text={t("WhyUs.title")} />
          </div>
        </Reveal>
        <div className="flex flex-col w-full md:flex-row gap-10 md:gap-20 items-center justify-center">
          <div className="flex-col justify-center align-middle items-center text-center">
            {/* //!trophy */}
            <Reveal>
              <div className="flex justify-center items-center mb-5">
                <GrTrophy size={70} />
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <p className="text-red-600 text-2xl font-bold flex justify-center">
                +908
              </p>
            </Reveal>
            <Reveal delay={0.7}>
              <p>{t("WhyUs.cases")}</p>
            </Reveal>
          </div>
          {/* //!folder */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <Reveal delay={0.8}>
              <div className="flex justify-center items-center mb-5">
                <LuFolderCheck size={70} />
              </div>
            </Reveal>
            <Reveal delay={0.9}>
              <p className="text-red-600 text-2xl font-bold">98%</p>
            </Reveal>
            <Reveal delay={1}>
              <p>{t("WhyUs.rate")}</p>
            </Reveal>
          </div>
          {/* //!translate */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <Reveal delay={1.1}>
              <div className="flex justify-center items-center mb-5">
                <BsTranslate size={70} />
              </div>
            </Reveal>
            <Reveal delay={1.2}>
              <p className="text-red-600 text-2xl font-bold">3</p>
            </Reveal>
            <Reveal delay={1.3}>
              <p>{t("WhyUs.languages")}</p>
            </Reveal>
            <Reveal delay={1.4}>
              <p className="text-xs">{t("WhyUs.idioms")}</p>
            </Reveal>
          </div>
          {/* //!book */}
          <div className="flex-col justify-center align-middle items-center text-center">
            <Reveal delay={1.5}>
              <div className="flex justify-center mb-5">
                <RiBook3Line size={70} />
              </div>
            </Reveal>
            <Reveal delay={1.6}>
              <p className="text-red-600 text-2xl font-bold">20</p>
            </Reveal>
            <Reveal delay={1.7}>
              <p>{t("WhyUs.years")}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
