import React from "react";

import { FAQ } from "./FAQ";
import SectionTitle from "@/components/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ImmigrationFAQ() {
  return (
    <div className="pt-10 px-4 sm:px-8 lg:px-16 pb-10 bg-gray-100">
      {/* Title */}

      <SectionTitle text="Immigration Frequent Questions" />

      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((question) => (
          <AccordionItem key={question.id} value={question.id}>
            <AccordionTrigger className="text-base sm:text-lg md:text-xl">
              {`${question.id}. ${question.title}`}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-lg">
              {question.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
