import React from "react";

export default function ProcessList() {
  const steps = [
    {
      id: 1,
      title: "Create an Express Entry Profile",
      description:
        "Candidates create an online profile, providing information about their skills, work experience, language ability, and education. Based on this information, candidates receive a CRS score.",
    },
    {
      id: 2,
      title: "Enter the Express Entry Pool",
      description:
        "Eligible profiles are entered into the Express Entry pool. Candidates are ranked based on their CRS scores. Higher scores increase the chances of receiving an Invitation to Apply (ITA) for permanent residence.",
    },
    {
      id: 3,
      title: "Receive an Invitation to Apply (ITA)",
      description:
        "The Immigration, Refugees, and Citizenship Canada (IRCC) conducts regular draws from the pool, inviting the highest-ranked candidates to apply for permanent residence. Candidates have 60 days to submit a complete application.",
    },
    {
      id: 4,
      title: "Submit a Complete Application",
      description:
        "After receiving an ITA, candidates must submit a complete application, including documents like police certificates, medical exams, and proof of funds. The IRCC reviews the application.",
    },
    {
      id: 5,
      title: "Application Processing and Approval",
      description:
        "The IRCC aims to process most applications within six months. Successful candidates receive confirmation of permanent residence.",
    },
  ];

  return (
    <div className="mx-auto">
      <h3 className="text-xl font-semibold mb-4">What is the process?</h3>

      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-[18px] top-1 bottom-40 w-0.5 bg-secondary-blue transform -translate-x-1/2 sm:bottom-20 md:bottom-12" />

        {steps.map((step) => (
          <div key={step.id} className="flex items-start relative">
            {/* Circle with step number */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold mr-4 relative z-10">
              {step.id}
            </div>
            {/* Step content */}
            <div>
              <h4 className="font-semibold text-lg">{step.title}</h4>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
