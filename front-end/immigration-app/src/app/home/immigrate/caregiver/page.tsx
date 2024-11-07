import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import caregiver from "@/assets/all_options_pics/caregiver_programs.jpeg";

export default function ExpressEntry() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={caregiver}
          alt="Lake"
          text="Caregiver"
          className="object-cover h-32 md:object-bottom lg:object-bottom xl:object-center"
        />
      </div>
      <div className="pt-4 sm:mx-10 md:mx-20 lg:mx-[124px]">
        <Breadcrumbs />
      </div>
    </div>
  );
}
