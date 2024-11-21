import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import SectionTitle from "@/components/SectionTitle";
import React from "react";


export default function ReadyToStart() {
  return (
    <div className="flex-col my-10 items-center text-center justify-center">
      <SectionTitle text="Are you ready to start?" />
      <FreeConsultationBtn />
    </div>
  );
}
