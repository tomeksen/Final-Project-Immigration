import React from "react";
import SectionTitle from "../SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FAQ } from "./FAQ";

export default function ImmigrationFrequentQuestions() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10">
      {/* Title */}
      <SectionTitle text="ImmigrationFrequentQuestions" />
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((question) => (
          <AccordionItem key={question.id} value={question.id}>
            <AccordionTrigger>
              {`${question.id}. ${question.title}`}
            </AccordionTrigger>
            <AccordionContent>{question.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
