import React from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export default function WhereToStart() {
  const steps = [
    {
      number: 1,
      title: "Book a 20 min free consultation",
      description: "Tell us about your goals in Canada and your profile.",
    },
    {
      number: 2,
      title: "Analyze your options",
      description:
        "We'll provide possible pathways for you and send you a quote.",
    },
    {
      number: 3,
      title: "Make your payment",
      description: "You can pay via e-transfer through installment payments",
    },
    {
      number: 4,
      title: "Gather the documents",
      description: "We'll list the documents required for your application.",
    },
    {
      number: 5,
      title: "Apply",
      description: "One of our experts will submit your application.",
    },
  ];
  return (
    <div className="p-6 md:p-10 items-center bg-gray-100">
      <CardContent className="p-4 md:p-6">
        <SectionTitle text="Where to start?" />

        <div className="relative mt-8">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-5 h-0.5 w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg bg-secondary-blue 2xl:max-w-screen-2xl" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Number circle */}
                <div className="w-10 h-10 rounded-full bg-secondary-blue flex items-center justify-center text-primary-foreground font-bold relative z-10">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg md:text-xl mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary-red hover:bg-red-800 text-white font-bold text-lg px-6 py-3"
          >
            Book a free consultation
          </Button>
        </div>
      </CardContent>
    </div>
  );
}
