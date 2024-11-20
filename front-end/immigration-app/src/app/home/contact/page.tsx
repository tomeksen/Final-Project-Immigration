
import Breadcrumbs from "@/components/Breadcrumbs";
import GetInTouch from "@/components/staticPage/contactUs/GetInTouch";
import HowCanWeHelp from "@/components/staticPage/contactUs/HowCanWeHelp";
import React from "react";

export default function page() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10 mt-10">
      <Breadcrumbs />
      <GetInTouch />
      <HowCanWeHelp />
    </div>
  );
}
