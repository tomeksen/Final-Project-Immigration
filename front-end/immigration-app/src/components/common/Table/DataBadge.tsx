import { Badge } from "@/components/ui/badge";
import React from "react";
import { AppDocTableType } from "./TableFilters";
/**
 * DataBadge - A component to display a badge with a variant based on the status of the data.
 *
 * @param {AppDocTableType} props.data - The data object containing the status information.
 * @returns {JSX.Element} The rendered badge component.
 */
const DataBadge = ({ data }: { data: AppDocTableType }) => {
  return (
    <>
      <Badge
        variant={
          data.status === "Completed"
            ? "default"
            : data.status === "Rejected"
            ? "destructive"
            : data.status === "Processing"
            ? "secondary"
            : "outline"
        }
      >
        {data.status}
      </Badge>
    </>
  );
};

export default DataBadge;
