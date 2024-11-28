"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Mapping object to transform folder names into readable titles
const pathNameToTitle: Record<string, string> = {
  aboutUs: "About Us",
  consultation: "Consultation",
  contact: "Contact",
  immigrate: "Immigrate",
  expressEntry: "Express Entry",
  provincialNominee: "Provincial Nominee",
  familySponsor: "Family Sponsor",
  caregiver: "Caregiver",
  startUpVisa: "Start-Up Visa",
  selfEmployed: "Self-employed",
  humanitarianCompassionate: "Humanitarian & Compassionate",
  northernImmigration: "Northern Immigration",
  atlanticImmigration: "Atlantic Immigration",
  study: "Study",
  work: "Work",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Split the path and filter out any empty values
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Function to transform path segment into a readable title
  const getReadableTitle = (segment: string) =>
    pathNameToTitle[segment] || segment.replace(/-/g, " ");

  return (
    <div className="pt-4 sm:px-9 flex justify-start my-2 lg:ml-8">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <ol className="list-none p-0 inline-flex items-center">
          {/* Home Link */}
          <li>
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 pl-3 sm:pl-0"
            >
              Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const readableTitle = getReadableTitle(segment);
            return (
              <li key={href} className="flex items-center">
                {/* Separator */}
                <span className="px-2">/</span>
                {/* Breadcrumb Link */}
                {isLast ? (
                  <span className="text-gray-700 font-semibold">
                    {decodeURIComponent(readableTitle)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {decodeURIComponent(readableTitle)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
