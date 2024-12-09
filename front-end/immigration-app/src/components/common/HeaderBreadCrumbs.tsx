import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React, { FC } from "react";
type Props = {
  rootName: string;
  breadName?: string;
  className?: string;
};

const HeaderBreadCrumbs: FC<Props> = ({ rootName, breadName, className }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 w-full text-2xl font-semibold py-4",
        className
      )}
    >
      <p>{rootName}</p>
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
