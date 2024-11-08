import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import SubSection from "@/components/SubSection";
import women from "@/assets/women_talking.jpeg";
import Image from "next/image";
import ProcessList from "@/components/expressEntry/ProcessList";
import ImmigrationPrograms from "@/components/expressEntry/ImmigrationPrograms";
import harbour from "@/assets/harbor.jpeg";
import Link from "next/link";
import northern from "@/assets/all_options_pics/northern_immigration.jpeg";

export default function page() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={northern}
          alt="Lake"
          text="Northern Immigration Program"
          className="object-cover h-32 md:object-bottom lg:object-bottom xl:object-center"
        />
      </div>
      <div className="pt-4 sm:mx-10 md:mx-20 lg:mx-[124px]">
        <Breadcrumbs />
      </div>
      <div className="px-4 sm:px-8 lg:px-16 pb-10">
        <SectionTitle text="Overview of Northern Immigration Program - RNIP" />
        <div>
          <SubSection
            title="How does Express Entry work?"
            description="The Express Entry system is the fastest way for skilled workers to
            move to Canada. It uses a points system called the Comprehensive
            Ranking System (CRS) to score candidates based on their age,
            education, work experience, and language skills. The higher your
            score, the better your chances of being invited to apply for
            permanent residence. The system also prioritizes those with job
            offers or provincial nominations, making it easier for them to get
            selected."
          />
          <SubSection
            title="What is the Express Entry System?"
            description="The Express Entry system is a streamlined immigration process designed to manage applications for permanent residence in Canada. It facilitates the selection of skilled workers most likely to succeed in the Canadian economy. As a Regulated Canadian Immigration Consultant (RCIC), Up Immigration provides expert guidance on navigating this system."
          />
          {/* image */}
          <div className="my-5">
            <Image
              src={women}
              alt="Women Talking"
              className="rounded-xl max-w-auto md:max-w-lg mx-auto"
            />
          </div>
          <SubSection
            title="How does Express Entry work?"
            description="The Express Entry system is the fastest way for skilled workers to move to Canada. It uses a points system called the Comprehensive Ranking System (CRS) to score candidates based on their age, education, work experience, and language skills. The higher your score, the better your chances of being invited to apply for permanent residence. The system also prioritizes those with job offers or provincial nominations, making it easier for them to get selected."
          />
          <ProcessList />
          {/* image */}
          <div className="my-5">
            <Image
              src={harbour}
              alt="Harbor"
              className="rounded-xl max-w-auto md:max-w-lg  mx-auto"
            />
          </div>
          <ImmigrationPrograms />

          <SubSection
            title="Who is Eligible for Express Entry?"
            description="Eligibility for Express Entry depends on several factors including age, education, work experience, and language proficiency. Detailed criteria are available on our Express Entry Work Experience Requirements page."
          />

          <div className="flex items-center justify-center">
            <Link href="/consultation">
              <button className="bg-primary-red text-white py-2 px-4 rounded-xl font-semibold ">
                Book a free consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
