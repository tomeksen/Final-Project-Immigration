import React from "react";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Sidebar");
  return (
    <div>
      <h1 className="text-white text-lg font-bold">{t("Services.title")}</h1>
      <p className="text-white text-sm">{t("Services.immigrate")}</p>
      <p className="text-white text-sm">{t("Services.work")}</p>
      <p className="text-white text-sm">{t("Services.study")}</p>
      <p className="text-white text-sm">{t("Services.sponsor")}</p>
    </div>
  );
}
