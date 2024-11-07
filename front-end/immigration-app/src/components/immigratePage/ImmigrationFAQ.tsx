import React from "react";
import SectionTitle from "../SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FAQ } from "./FAQ";

export default function ImmigrationFAQ() {
  return (
    <div className="pt-10 px-4 sm:px-8 lg:px-16 pb-10 bg-gray-100">
      {/* Title */}
      <SectionTitle text="ImmigrationFrequentQuestions" />
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((question) => (
          <AccordionItem key={question.id} value={question.id}>
            <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl">
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
