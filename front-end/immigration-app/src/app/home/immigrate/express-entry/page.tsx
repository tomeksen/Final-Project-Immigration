import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import expressEntry from "@/assets/all_options_pics/express_entry.jpeg";
import SectionTitle from "@/components/SectionTitle";
import SubSection from "@/components/SubSection";
import women from "@/assets/women_talking.jpeg";
import Image from "next/image";
import ProcessList from "@/components/expressEntry/ProcessList";
import Testimonials from "@/components/mainPage/Testimonials";
import ImmigrationFAQ from "@/components/immigratePage/ImmigrationFAQ";

export default function ExpressEntry() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={expressEntry}
          alt="Lake"
          text="Express Entry"
          className="object-cover h-32 md:object-bottom lg:object-bottom xl:object-center"
        />
      </div>
      <div className="pt-4 sm:mx-10 md:mx-20 lg:mx-[124px]">
        <Breadcrumbs />
      </div>
      <div className="px-4 sm:px-8 lg:px-16 pb-10">
        <SectionTitle text="Overview of Express Entry System" />
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
          <Image
            src={women}
            alt="Women Talking"
            className="rounded-xl max-w-auto mx-auto"
          />
          <SubSection
            title="How does Express Entry work?"
            description="The Express Entry system is the fastest way for skilled workers to move to Canada. It uses a points system called the Comprehensive Ranking System (CRS) to score candidates based on their age, education, work experience, and language skills. The higher your score, the better your chances of being invited to apply for permanent residence. The system also prioritizes those with job offers or provincial nominations, making it easier for them to get selected."
          />
          <ProcessList />
        </div>
      </div>
      <Testimonials />
      <ImmigrationFAQ />
    </div>
  );
}
