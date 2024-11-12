import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import React from "react";
import handshage from "@/assets/aboutUs/handshake.jpeg";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import larissa from "@/assets/larissa_up_immigration.png";
import Image from "next/image";
import Team from "@/components/aboutUs/Team";
import Strengths from "@/components/aboutUs/Strengths";
import OurStory from "@/components/aboutUs/OurStory";
import ReadyToStart from "@/components/aboutUs/ReadyToStart";

export default function page() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={handshage}
          alt="Female student holding notebooks"
          text="Study"
          className="object-cover h-32 md:object-center lg:object-top xl:object-center"
        />
      </div>
      <Breadcrumbs />
      <div className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 ">
        <div className="mb-5">
          <SectionTitle text="Who are we?" />
          <p>
            Here at Up Immigration, we are dedicated to making your Canadian
            dream a reality. Our passion lies in helping individuals and
            families navigate the complexities of immigration with confidence.
          </p>
        </div>
        <Team />
        <Strengths />
        <OurStory />
        <ReadyToStart />
      </div>
    </div>
  );
}
