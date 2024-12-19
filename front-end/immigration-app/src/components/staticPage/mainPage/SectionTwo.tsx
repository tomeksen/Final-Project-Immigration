import React from "react";
import Image from "next/image";
import larissa from "@/assets/larissa_up_immigration.png";
import cicc_ccic from "@/assets/cicc_ccic.png";
import SectionTitle from "@/components/SectionTitle";
import { Reveal } from "@/utils/Reveal";
import { useTranslations } from "next-intl";

export default function SectionTwo() {
  const t = useTranslations("HomePage");

  return (
    <Reveal>
      <div className="bg-gray-100 py-10">
        <div className="flex justify-center gap-8 p-10 md:ml-5 lg:ml-10 items-center bg-gray-100">
          {/* text */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <SectionTitle text={t("Consultant.titleConsultant")} />
              <h4 className="font-semibold text-xs mb-4">
                Larissa Castelluber
              </h4>
              <p>{t("Consultant.consultantIntroduction1")}</p>
              <p>
                {t("Consultant.consultantIntroduction2")}{" "}
                <a className="underline underline-offset-2 cursor-pointer">
                  {t("Consultant.verifyICCRC")}.
                </a>
              </p>
              <div className="flex flex-col items-center justify-center mt-10 gap-10 md:flex-row ">
                <div>
                  <p>{t("Consultant.registration")}</p>
                  <a className="cursor-pointer text-red-500">
                    {t("Consultant.verifyICCRC")}
                  </a>
                </div>
                <div>
                  <Image src={cicc_ccic} alt="CICC and CCIC logo" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <Image src={larissa} alt="Consultant Larissa" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
