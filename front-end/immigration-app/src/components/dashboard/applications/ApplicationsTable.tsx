"use client";

import { useEffect, useState } from "react";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Filters from "@/components/Filters";
import { AppTable } from "@/components/AppTable";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { TaskManager } from "./TaskManager";
import { useAuth } from "@clerk/nextjs";

export type Application = {
  id: number;
  userId: string;
  applicationName: string;
  applicationDate: string;
  applicationType: string;
  applicationStatus: string;
};

// fetch data from DB based on user_id
export const applications: Application[] = [
  // this is a dummy data
  {
    id: 1,
    userId: "001",
    applicationName: "Maria_CICCC_181",
    applicationDate: "04 Apr 2023",
    applicationType: "Student",
    applicationStatus: "Completed",
  },
  {
    id: 2,
    userId: "002",
    applicationName: "Maria_CICCC_UX/UI",
    applicationDate: "15 Nov 2023",
    applicationType: "Student",
    applicationStatus: "Rejected",
  },
  {
    id: 3,
    userId: "003",
    applicationName: "Maria_CICCC_UX/UI_2",
    applicationDate: "08 Jul 2024",
    applicationType: "Student",
    applicationStatus: "Processing",
  },
  {
    id: 4,
    userId: "004",
    applicationName: "Maria_Work Permit",
    applicationDate: "09 Jul 2024",
    applicationType: "Work Permit",
    applicationStatus: "On Hold",
  },
  {
    id: 5,
    userId: "005",
    applicationName: "Carry_Visitor",
    applicationDate: "09 Jul 2024",
    applicationType: "Visitor",
    applicationStatus: "Processing",
  },
];

export function ApplicationsTable() {
  const [sortBy, setSortBy] = useState("");
  const [visaType, setVisaType] = useState("");
  const [status, setStatus] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const { theme } = useTheme();
  const { getToken } = useAuth(); //add id? to use clerkId

  // use clerkId later
  const userId = "1";

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = await getToken();
        const response = await fetch(
          `https://immigrationapi.tomytrt.workers.dev/api/applications/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }

        const data = await response.json();
        setApplications(data);
      } catch (e: any) {
        throw new Error("Failed to fetch applications");
      }
    };

    fetchApplications();
  }, [userId, getToken]);

  const resetFilters = () => {
    setSortBy("");
    setVisaType("");
    setStatus("");
  };

  // filter data
  const filteredApplications = applications
    .filter((app) => !visaType || app.applicationType === visaType)
    .filter((app) => !status || app.applicationStatus === status)
    .sort((a, b) => {
      if (sortBy === "date")
        return (
          new Date(a.applicationDate).getTime() -
          new Date(b.applicationDate).getTime()
        );
      if (sortBy === "date-last")
        return (
          new Date(b.applicationDate).getTime() -
          new Date(a.applicationDate).getTime()
        );
      // if (sortBy === "progress") return a.progress - b.progress;
      // if (sortBy === "progress-hl") return b.progress - a.progress;
      if (sortBy === "name") {
        if (a.applicationName < b.applicationName) return -1;
        if (a.applicationName > b.applicationName) return 1;
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
