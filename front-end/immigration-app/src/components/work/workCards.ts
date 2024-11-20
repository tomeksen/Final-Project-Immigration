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

export const workOptionsCards: WorkOptions[] = [
  {
    id: "1",
    title: "Work Permit/Extensions",
    description:
      "Canadian employers may hire temporary foreign workers when suitable candidates can't be found among Canadian residents (permanent residents or citizens). Employers seeking to hire foreign workers must apply for a document called a Labour Market Impact Assessment (LMIA) if they meet the eligibility criteria. A positive LMIA demonstrates the need for a foreign worker to fill the position.",
    imageSrc: telemarketing,
  },
  {
    id: "2",
    title: "Open Work Permit",
    description:
      "Document issued within Canada that allows certain foreigners to work for any Canadian company. To be eligible you must be the spouse of an international student enrolled full-time at a Canadian college (mostly public) or university, or be the spouse of a person who has worker status with job offer at NOC 0, A or B. You can also obtain an open work permit, if you are part of a International Experience Canada program regularly offers striptease, erotic dance, escort services or erotic massages.",
    imageSrc: waiter,
  },
  {
    id: "3",
    title: "Post Graduation Work Permit (PGWP)",
    description:
      "For individuals with relevant experience in cultural or athletic activities to gain permanent residency in Canada. This program is ideal for those who have demonstrated their ability to be self-employed in fields such as music, writing, visual arts, or professional athletics. By contributing their unique talents, self-employed individuals help enrich Canada’s cultural and athletic landscape.",
    imageSrc: gradStudent,
  },
  {
    id: "4",
    title: "Labour Market Impact Assessment (LMIA)",
    description:
      "For skilled foreign workers and international graduates to build a new life in one of Canada's vibrant Atlantic provinces: New Brunswick, Nova Scotia, Newfoundland and Labrador, and Prince Edward Island. This program makes it easier for newcomers to settle and contribute to the growth of these welcoming communities.",
    imageSrc: constructionWorker,
  },
  {
    id: "5",
    title: "Spousal/Common-Law Partner Open Work Permit (SOWP)",
    description:
      "Spouse, common-law partner or conjugal partner living in Canada who’s being sponsored for permanent residence an accompanying dependent child of the principal applicant",
    imageSrc: couple,
  },
];
