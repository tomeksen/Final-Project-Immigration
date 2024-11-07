import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import expressEntry from "@/assets/all_options_pics/express_entry.jpeg";

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
    </div>
  );
}
