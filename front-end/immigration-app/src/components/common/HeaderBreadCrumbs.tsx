import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
type Props = {
  rootName: string;
  rootHref?: string;
  breadName?: string;
  className?: string;
};

/**
 * HeaderBreadCrumbs - A component to display breadcrumb navigation for the page header.
 *
 * @param {string} rootName - The name of the root link displayed in the breadcrumbs.
 * @param {string} [rootHref] - The URL of the root link. If not provided, the root name will not be a link.
 * @param {string} [breadName] - The name of the current breadcrumb item. This is displayed after the root name.
 * @param {string} [className] - Additional CSS class names to apply to the container for custom styling.
 * @returns {JSX.Element} The rendered breadcrumb component.
 */
const HeaderBreadCrumbs: FC<Props> = ({
  rootName,
  rootHref,
  breadName,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 w-full text-2xl font-semibold py-4",
        className
      )}
    >
      {rootHref ? <Link href={rootHref}>{rootName}</Link> : <p>{rootName}</p>}

      {breadName && (
        <>
          <ChevronRight className="w-7 h-7" />
          <p className="text-primary-red">{breadName}</p>{" "}
        </>
      )}
    </div>
  );
};

export default HeaderBreadCrumbs;
