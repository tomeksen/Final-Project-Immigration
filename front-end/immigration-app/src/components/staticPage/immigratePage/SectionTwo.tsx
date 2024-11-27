import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { immigrationOptions } from "./immigrationOptions";
import { programCards } from "./programCards";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

export default function SectionTwo() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10">
      {/* Title */}
      <SectionTitle text="Discover all your options" />
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-8">
        {immigrationOptions.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
          >
            <Link href={`/immigrate/${option.link}`}>{option.title}</Link>
          </Button>
        ))}
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programCards.map((program) => (
          <div
            key={program.title}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow max-w-sm mx-auto"
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
