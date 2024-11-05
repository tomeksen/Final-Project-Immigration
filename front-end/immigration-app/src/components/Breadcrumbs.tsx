"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Split the path and filter out any empty values
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
      <ol className="list-none p-0 inline-flex">
        {/* Home Link */}
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <li key={href} className="flex items-center">
              {/* Separator */}
              <span className="px-2">/</span>

              {/* Breadcrumb Link */}
              {isLast ? (
                <span className="text-gray-700 font-semibold">
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link href={href} className="text-gray-500 hover:text-gray-700">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
