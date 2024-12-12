"use client";

import { useState } from "react";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { DataTable } from "./DataTable";
import FilterTable from "./FilterTable";
import HeaderBreadCrumbs from "../HeaderBreadCrumbs";

export type AppDocTableType = {
  id: string;
  number: string;
  name: string;
  date: string;
  type: string;
  progress: number;
  status: string;
};

/**
 *
 * @param {string} title - "Application" | "Documents" display the title on the header
 * @param {AppDocTableType[]} data - An array of data objects to be displayed in the table. Each object represents a row.
 * @returns A React component that includes filtering options and a filtered data table.
 */
export function TableFilters({
  data,
  title,
}: {
  data: AppDocTableType[];
  title: "Application" | "Documents";
}) {
  const [sortBy, setSortBy] = useState("");
  const [visaType, setVisaType] = useState("");
  const [status, setStatus] = useState("");
  const { theme } = useTheme();

  const resetFilters = () => {
    setSortBy("");
    setVisaType("");
    setStatus("");
  };

  const filteredApplications = data
    .filter((d) => !visaType || d.type === visaType)
    .filter((d) => !status || d.status === status)
    .sort((a, b) => {
      if (sortBy === "date")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === "date-last")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "progress") return a.progress - b.progress;
      if (sortBy === "progress-hl") return b.progress - a.progress;
      if (sortBy === "name") {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return 0;
    });

  return (
    <div className="p-4 space-y-4">
      <HeaderBreadCrumbs rootName="Documents" />
      {theme === "dark" ? (
        <FilterTable
          sortBy={sortBy}
          visaType={visaType}
          status={status}
          setSortBy={setSortBy}
          setVisaType={setVisaType}
          setStatus={setStatus}
          resetFilters={resetFilters}
          appearance={{ baseTheme: dark }}
        />
      ) : (
        <FilterTable
          sortBy={sortBy}
          visaType={visaType}
          status={status}
          setSortBy={setSortBy}
          setVisaType={setVisaType}
          setStatus={setStatus}
          resetFilters={resetFilters}
        />
      )}

      {theme === "dark" ? (
        <DataTable
          data={filteredApplications}
          appearance={{ baseTheme: dark }}
        />
      ) : (
        <DataTable data={filteredApplications} />
      )}
    </div>
  );
}
