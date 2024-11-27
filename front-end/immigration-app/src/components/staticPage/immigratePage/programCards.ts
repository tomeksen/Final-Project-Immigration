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
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
};

export const programCards: Program[] = [
  {
    title: "Express Entry",
    description:
      "Canada's fastest and most popular way to gain permanent residency. It is an immigration system designed to streamline applications, with all required documents typically processed within six months or less. By submitting a profile, candidates are ranked based on their qualifications and invited to apply for permanent residency.",
    imageSrc: expressEntry,
  },
  {
    title: "Provincial Nominee Programs - PNP",
    description:
      "For Canadian provinces and territories to nominate individuals for permanent residency based on their specific economic needs. Each region has its own unique streams targeting students, business people, skilled workers, and semi-skilled workers. By aligning your skills and experience with a province's needs, you can receive a nomination that boosts your chances of obtaining permanent residency.",
    imageSrc: provincial,
  },
  {
    title: "Family Sponsorship",
    description:
      "For Canadian citizens and permanent residents to reunite with their loved ones by sponsoring them for permanent residency. This program includes options for sponsoring spouses, common-law partners, dependent children, parents, and grandparents. By supporting family reunification, the program helps build stronger, more connected communities in Canada.",
    imageSrc: family,
  },
  {
    title: "Caregiver Programs",
    description:
      "For workers who provide support to our children, seniors, and others requiring care. For this reason, Canada manages a range of programs to assist caregivers with finding work and obtaining permanent residency through programs such as the Interim Pathway for Caregivers, Home Child Care Provider Pilot and Home Support Worker Pilot.",
    imageSrc: caregiver,
  },
  {
    title: "Start-Up Visa Program",
    description:
      "For innovative entrepreneurs to establish their businesses in Canada and gain permanent residency. This program is designed for individuals with a viable business idea that has the support of a designated organization, such as a venture capital fund, angel investor group, or business incubator. By fostering innovation and entrepreneurship, the Start-Up Visa Program helps drive economic growth and create jobs in Canada.",
    imageSrc: startUp,
  },
  {
    title: "Self-Employed Program",
    description:
      "For individuals with relevant experience in cultural or athletic activities to gain permanent residency in Canada. This program is ideal for those who have demonstrated their ability to be self-employed in fields such as music, writing, visual arts, or professional athletics. By contributing their unique talents, self-employed individuals help enrich Canada’s cultural and athletic landscape.",
    imageSrc: selfEmployed,
  },
  {
    title: "Humanitarian and Compassionate - H&C",
    description:
      "For individuals with relevant experience in cultural or athletic activities to gain permanent residency in Canada. This program is ideal for those who have demonstrated their ability to be self-employed in fields such as music, writing, visual arts, or professional athletics. By contributing their unique talents, self-employed individuals help enrich Canada’s cultural and athletic landscape.",
    imageSrc: humanitarian,
  },
  {
    title: "Atlantic Immigration Program - AIP",
    description:
      "For skilled foreign workers and international graduates to build a new life in one of Canada's vibrant Atlantic provinces: New Brunswick, Nova Scotia, Newfoundland and Labrador, and Prince Edward Island. This program makes it easier for newcomers to settle and contribute to the growth of these welcoming communities.",
    imageSrc: atlantic,
  },
  {
    title: "Northern Immigration Program - RNIP",
    description:
      "For skilled workers to settle in smaller communities across Canada. This program aims to support the economic development of rural and northern regions by attracting newcomers who can fill local labor market gaps. Participating communities, including those in Ontario, Western Canada, and the three territories, provide a welcoming environment for newcomers looking to build a new life.",
    imageSrc: northern,
  },
];
