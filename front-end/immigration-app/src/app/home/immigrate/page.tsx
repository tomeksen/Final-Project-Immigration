import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import React from "react";
import lakeBg from "@/assets/lakeCanada.png";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImmigrationFAQ from "@/components/staticPage/immigratePage/ImmigrationFAQ";
import SectionOne from "@/components/staticPage/immigratePage/SectionOne";
import SectionTwo from "@/components/staticPage/immigratePage/SectionTwo";
import Testimonials from "@/components/staticPage/mainPage/Testimonials";
import WhereToStart from "@/components/staticPage/mainPage/WhereToStart";

export default function page() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={lakeBg}
          alt="Lake"
          text="Immigrate"
          className="object-cover h-32 md:object-bottom xl:object-center"
        />
      </div>
      <Breadcrumbs />
      <SectionOne />
      <SectionTwo />
      <WhereToStart />
      <Testimonials />
      <ImmigrationFAQ />
    </div>
  );
}
