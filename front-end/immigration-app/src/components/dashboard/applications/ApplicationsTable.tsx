"use client";

import { useState } from "react";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Filters from "@/components/Filters";
import { AppTable } from "@/components/AppTable";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { TaskManager } from "./TaskManager";

export type Application = {
  id: number;
  userId: string;
  name: string;
  date: string;
  type: string;
  progress: number;
  status: string;
};

// fetch data from DB based on user_id
export const applications: Application[] = [
  {
    id: 1,
    userId: "001",
    name: "Maria_CICCC_181",
    date: "04 Apr 2023",
    type: "Student",
    progress: 100,
    status: "Completed",
  },
  {
    id: 2,
    userId: "002",
    name: "Maria_CICCC_UX/UI",
    date: "15 Nov 2023",
    type: "Student",
    progress: 100,
    status: "Rejected",
  },
  {
    id: 3,
    userId: "003",
    name: "Maria_CICCC_UX/UI_2",
    date: "08 Jul 2024",
    type: "Student",
    progress: 50,
    status: "Processing",
  },
  {
    id: 4,
    userId: "004",
    name: "Maria_Work Permit",
    date: "09 Jul 2024",
    type: "Work Permit",
    progress: 75,
    status: "On Hold",
  },
  {
    id: 5,
    userId: "005",
    name: "Carry_Visitor",
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
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const { theme } = useTheme();

  const resetFilters = () => {
    setSortBy("");
    setVisaType("");
    setStatus("");
  };

  // filter data
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
      <HeaderBreadCrumbs rootName={"Applications"} />

      <Filters
        sortBy={sortBy}
        visaType={visaType}
        status={status}
        setSortBy={setSortBy}
        setVisaType={setVisaType}
        setStatus={setStatus}
        resetFilters={resetFilters}
        appearance={theme === "dark" ? { baseTheme: dark } : undefined}
      />

      <AppTable
        appProps={filteredApplications}
        onRowClick={setSelectedApplication}
        appearance={theme === "dark" ? { baseTheme: dark } : undefined}
      />
    </div>
  );
}
