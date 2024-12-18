import { StaticImageData } from "next/image";
import expressEntry from "@/assets/all_options_pics/express_entry.jpeg";
import provincial from "@/assets/all_options_pics/provincial_nominee.png";
import family from "@/assets/all_options_pics/family_sponsorship.jpeg";
import caregiver from "@/assets/all_options_pics/caregiver_programs.jpeg";
import startUp from "@/assets/all_options_pics/startup_visa.png";
import selfEmployed from "@/assets/all_options_pics/self_employed.jpeg";
import humanitarian from "@/assets/all_options_pics/humanitarian.jpeg";
import atlantic from "@/assets/all_options_pics/atlantic_immigration.jpeg";
import northern from "@/assets/all_options_pics/northern_immigration.jpeg";

type Program = {
  id: number;
  title: string;
  description: string;
  link: string;
  imageSrc: string | StaticImageData;
};

export const programCards = (t: (key: string) => string): Program[] => [
  {
    id: 1,
    title: t("ImmigrationPrograms.expressEntry.title"),
    description: t("ImmigrationPrograms.expressEntry.description"),
    link: "expressEntry",
    imageSrc: expressEntry,
  },
  {
    id: 2,
    title: t("ImmigrationPrograms.provincialNominee.title"),
    description: t("ImmigrationPrograms.provincialNominee.description"),
    link: "provincialNominee",
    imageSrc: provincial,
  },
  {
    id: 3,
    title: t("ImmigrationPrograms.familySponsorship.title"),
    description: t("ImmigrationPrograms.familySponsorship.description"),
    link: "familySponsor",
    imageSrc: family,
  },
  {
    id: 4,
    title: t("ImmigrationPrograms.caregiverPrograms.title"),
    description: t("ImmigrationPrograms.caregiverPrograms.description"),
    link: "caregiver",
    imageSrc: caregiver,
  },
  {
    id: 5,
    title: t("ImmigrationPrograms.startUpVisa.title"),
    description: t("ImmigrationPrograms.startUpVisa.description"),
    link: "startUpVisa",
    imageSrc: startUp,
  },
  {
    id: 6,
    title: t("ImmigrationPrograms.selfEmployed.title"),
    description: t("ImmigrationPrograms.selfEmployed.description"),
    link: "selfEmployed",
    imageSrc: selfEmployed,
  },
  {
    id: 7,
    title: t("ImmigrationPrograms.humanitarian.title"),
    description: t("ImmigrationPrograms.humanitarian.description"),
    link: "humanitarianCompassionate",
    imageSrc: humanitarian,
  },
  {
    id: 8,
    title: t("ImmigrationPrograms.atlanticProgram.title"),
    description: t("ImmigrationPrograms.atlanticProgram.description"),
    link: "atlanticImmigration",
    imageSrc: atlantic,
  },
  {
    id: 9,
    title: t("ImmigrationPrograms.northernProgram.title"),
    description: t("ImmigrationPrograms.northernProgram.description"),
    link: "northernImmigration",
    imageSrc: northern,
  },
];
