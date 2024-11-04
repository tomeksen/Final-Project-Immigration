import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import React from "react";
import lakeBg from "@/assets//lakeCanada.png";
import SectionOne from "@/components/immigratePage/SectionOne";
import SectionTwo from "@/components/immigratePage/SectionTwo";
import WhereToStart from "@/components/mainPage/WhereToStart";
import Testimonials from "@/components/mainPage/Testimonials";

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
      <SectionOne />
      <SectionTwo />
      <WhereToStart />
      <Testimonials />
    </div>
  );
}
