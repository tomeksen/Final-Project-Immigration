import React from "react";
import { useTranslations } from "next-intl";

export default function Company() {
  const t = useTranslations("Sidebar");
  return (
    <div>
      <h1 className="text-white text-lg font-bold">{t("Company.title")}</h1>
      <p className="text-white text-sm">{t("Company.about")}</p>
      <p className="text-white text-sm">{t("Company.contact")}</p>
    </div>
  );
}
