import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import React from "react";
import handshake from "@/assets/aboutUs/handshake.jpeg";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Team from "@/components/staticPage/aboutUs/Team";
import Strengths from "@/components/staticPage/aboutUs/Strengths";
import OurStory from "@/components/staticPage/aboutUs/OurStory";
import ReadyToStart from "@/components/staticPage/aboutUs/ReadyToStart";
import { Reveal } from "@/utils/Reveal";

export default function page() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={handshake}
          alt="Female student holding notebooks"
          text="About Us"
          className="object-cover h-32 md:object-center lg:object-top xl:object-center"
        />
      </div>
      <Reveal>
        <Breadcrumbs />
      </Reveal>
      <div className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 ">
        <Reveal>
          <div className="mb-5">
            <SectionTitle text="Who are we?" />
            <p>
              Here at Up Immigration, we are dedicated to making your Canadian
              dream a reality. Our passion lies in helping individuals and
              families navigate the complexities of immigration with confidence.
            </p>
          </div>
        </Reveal>
        <Team />
        <Strengths />
        <OurStory />
        <ReadyToStart />
      </div>
    </div>
  );
}
