import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import React from "react";
import lakeBg from "@/assets//lakeCanada.png";
import SectionOne from "@/components/immigratePage/SectionOne";

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
    </div>
  );
}
