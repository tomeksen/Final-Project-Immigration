import React from "react";
import { Button } from "../ui/button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SectionTitle from "../SectionTitle";
import { immigrationOptions } from "./immigrationOptions";
import { programCards } from "./programCards";
import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="px-16 pb-10 md:mx-7 lg:mx-14">
      {/* Title */}
      <SectionTitle text="Discover all your options" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {immigrationOptions.map((option) => (
          <Button
            key={option}
            variant="outline"
            className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
          >
            {option}
          </Button>
        ))}
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-baseline justify-center align-middle">
        {programCards.map((program) => (
          <div
            key={program.title}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow w-96 mx-auto"
          >
            {/* Program Title and Dropdown Icon */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{program.title}</h3>
              <MdOutlineKeyboardArrowDown className="w-5 h-5 text-red-600" />
            </div>

            {/* Program Description */}
            <p className="text-gray-600 text-sm mb-4">{program.description}</p>

            {/* Program Image */}
            <Image
              src={program.imageSrc}
              alt={program.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
