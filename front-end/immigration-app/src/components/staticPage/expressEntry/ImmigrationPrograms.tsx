import SubSection from "@/components/SubSection";
import React from "react";

type Programs = {
  id: string;
  title: string;
  description: string;
};

export const Programs: Programs[] = [
  {
    id: "1",
    title: "Federal Skilled Worker Program",
    description:
      "Express Entry operates through an online system that manages applications for three federal immigration programs:",
  },
  {
    id: "2",
    title: "Federal Skilled Trades Program",
    description:
      "The Federal Skilled Trades Program targets skilled tradespeople with qualifications in specific trades. This program emphasizes practical skills and work experience in trades such as electricians, plumbers, and chefs, among others.",
  },
  {
    id: "3",
    title: "Canadian Experience Class",
    description:
      "The Canadian Experience Class is for individuals who have already gained skilled work experience in Canada. This program is ideal for temporary foreign workers or international graduates who have accumulated significant work experience in Canada and wish to transition to permanent residence.",
  },
];

export default function ImmigrationPrograms() {
  return (
    <div>
      <SubSection
        title="Federal Immigration Programs Managed by Express Entry"
        description="Express Entry operates through an online system that manages applications for three federal immigration programs:"
      />
      {Programs.map((program) => (
        <div key={program.id}>
          <h3 className="font-semibold mb-5">{`${program.id}. ${program.title}`}</h3>
          <p className="mb-5">{program.description}</p>
        </div>
      ))}
    </div>
  );
}
