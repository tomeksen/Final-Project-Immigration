import React from "react";
import SectionTitle from "../SectionTitle";
import FreeConsultationBtn from "../FreeConsultationBtn";

export default function ReadyToStart() {
  return (
    <div className="flex-col my-10 items-center text-center justify-center">
      <SectionTitle text="Are you ready to start?" />
      <FreeConsultationBtn />
    </div>
  );
}
