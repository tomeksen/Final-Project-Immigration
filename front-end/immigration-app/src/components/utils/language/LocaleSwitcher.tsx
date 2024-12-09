import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { Reveal } from "@/utils/Reveal";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <Reveal>
      <LocaleSwitcherSelect
        defaultValue={locale}
        items={[
          {
            value: "en",
            label: t("en"),
          },
          {
            value: "es",
            label: t("es"),
          },
          {
            value: "pt",
            label: t("pt"),
          },
          {
            value: "jp",
            label: t("jp"),
          },
        ]}
        label={t("label")}
      />
    </Reveal>
  );
}
