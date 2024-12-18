"use client";

import { Suspense, useEffect, useState } from "react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Filters from "@/components/Filters";
import { AppTable } from "@/components/AppTable";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { Application } from "@/type/Applications.type";
import { TaskManager } from "./TaskManager";
import { useAuth } from "@clerk/nextjs";

type ApplicationsTableProps = {
  applications?: Application[];
};

export function ApplicationsTable({applications}: ApplicationsTableProps) {
  const [sortBy, setSortBy] = useState("");
  const [visaType, setVisaType] = useState("");
  const [status, setStatus] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const { theme } = useTheme();

  if (!applications) { 
    applications = [];
  }

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
      // if (sortBy === "date")
      //   return (
      //     new Date(a.applicationDate).getTime() -
      //     new Date(b.applicationDate).getTime()
      //   );
      // if (sortBy === "date-last")
      //   return (
      //     new Date(b.applicationDate).getTime() -
      //     new Date(a.applicationDate).getTime()
      //   );
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

      <Suspense fallback={<div>Loading...</div>} >
        <AppTable
          appProps={filteredApplications}
          onRowClick={setSelectedApplication}
          appearance={theme === "dark" ? { baseTheme: dark } : undefined}
        />
        </Suspense>
    </div>
  );
}
