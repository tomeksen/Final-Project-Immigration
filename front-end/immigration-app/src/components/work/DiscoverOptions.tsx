import React from "react";
import SectionTitle from "../SectionTitle";
import { workOptions } from "./workOptions";
import { Button } from "../ui/button";
import Link from "next/link";
import { workOptionsCards } from "./workCards";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

export default function DiscoverOptions() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10">
      <SectionTitle text="Discover all you options" />
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-8">
        {workOptions.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
          >
            <Link href={`/work/${option.link}`}>{option.title}</Link>
          </Button>
        ))}
      </div>

      {/* Permit Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workOptionsCards.map((permit) => (
          <div
            key={permit.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow max-w-sm mx-auto"
          >
            {/* Permit Title and Dropdown Icon */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{permit.title}</h3>
              <MdOutlineKeyboardArrowDown className="w-5 h-5 text-red-600" />
            </div>

            {/* Program Description */}
            <p className="text-gray-600 text-sm mb-4">{permit.description}</p>

            {/* Program Image */}
            <Image
              src={permit.imageSrc}
              alt={permit.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
