"use client";

import { useEffect, useState } from "react";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Filters from "@/components/Filters";
import { AppTable } from "@/components/AppTable";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { TaskManager } from "./TaskManager";
import { useAuth } from "@clerk/nextjs";
import { Application } from "@/type/Application.type";


export function ApplicationsTable() {
  const [sortBy, setSortBy] = useState("");
  const [visaType, setVisaType] = useState("");
  const [status, setStatus] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const { theme } = useTheme();
  const { getToken, userId } = useAuth(); //add id? to use clerkId
  const [isLoading, setIsLoading] = useState(false);


  const fetchApplications = async () => {
    try {
      setIsLoading(true);
      setApplications([]);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchApplications();
    }
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
    <div key={userId} className="p-4 space-y-4">
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AppTable
          appProps={filteredApplications}
          onRowClick={setSelectedApplication}
          appearance={theme === "dark" ? { baseTheme: dark } : undefined}
        />
      )}
    </div>
  );
}
