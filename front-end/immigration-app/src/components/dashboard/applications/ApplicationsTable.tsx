"use client";

import { useState } from "react";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Filters from "@/components/Filters";
import { AppTable } from "@/components/AppTable";

type Application = {
  number: string;
  name: string;
  date: string;
  type: string;
  progress: number;
  status: string;
};

const applications: Application[] = [
  {
    number: "001",
    name: "Maria_CICCC_181",
    date: "04 Apr 2023",
    type: "Student",
    progress: 100,
    status: "Completed",
  },
  {
    number: "002",
    name: "Maria_CICCC_UX/UI",
    date: "15 Nov 2023",
    type: "Student",
    progress: 100,
    status: "Rejected",
  },
  {
    number: "003",
    name: "Maria_CICCC_UX/UI_2",
    date: "08 Jul 2024",
    type: "Student",
    progress: 50,
    status: "Processing",
  },
  {
    number: "004",
    name: "Maria_Work Permit",
    date: "09 Jul 2024",
    type: "Work Permit",
    progress: 75,
    status: "On Hold",
  },
  {
    number: "005",
    name: "Carrey_Visitor",
    date: "09 Jul 2024",
    type: "Visitor",
    progress: 25,
    status: "Processing",
  },
];

export function ApplicationsTable() {
  const [sortBy, setSortBy] = useState("");
  const [visaType, setVisaType] = useState("");
  const [status, setStatus] = useState("");
  const { theme } = useTheme();

  const resetFilters = () => {
    setSortBy("");
    setVisaType("");
    setStatus("");
  };

  const filteredApplications = applications
    .filter((app) => !visaType || app.type === visaType)
    .filter((app) => !status || app.status === status)
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
      <h1 className="text-2xl font-bold">Applications</h1>
      {theme === "dark" ? (
        <Filters
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
        <Filters
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
        <AppTable
          appProps={filteredApplications}
          appearance={{ baseTheme: dark }}
        />
      ) : (
        <AppTable appProps={filteredApplications} />
      )}
    </div>
  );
}
