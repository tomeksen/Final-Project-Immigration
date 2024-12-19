import { StaticImageData } from "next/image";
import telemarketing from "@/assets/work/telemarketingMan.jpg";
import waiter from "@/assets/work/waiter.jpeg";
import gradStudent from "@/assets/work/degreeCompletion.jpeg";
import constructionWorker from "@/assets/work/constructionWorker.jpeg";
import couple from "@/assets/work/couple.jpeg";

type WorkOptions = {
  id: string;
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
};

export const workOptionsCards = (t: (key: string) => string): WorkOptions[] => [
  {
    id: "1",
    title: t("Cards.card1.title"),
    description: t("Cards.card1.description"),
    imageSrc: telemarketing,
  },
  {
    id: "2",
    title: t("Cards.card2.title"),
    description: t("Cards.card2.description"),
    imageSrc: waiter,
  },
  {
    id: "3",
    title: t("Cards.card3.title"),
    description: t("Cards.card3.description"),
    imageSrc: gradStudent,
  },
  {
    id: "4",
    title: t("Cards.card4.title"),
    description: t("Cards.card4.description"),
    imageSrc: constructionWorker,
  },
  {
    id: "5",
    title: t("Cards.card5.title"),
    description: t("Cards.card5.description"),
    imageSrc: couple,
  },
];
