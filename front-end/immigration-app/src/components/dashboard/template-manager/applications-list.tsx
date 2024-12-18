"use client";

import { useEffect, useState } from "react";

import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

type Application = {
  id: number;
  user_id: string;
  applicationName: string;
  applicationDate: string;
  applicationType: string;
  progress: number;
  applicationStatus: string;
};

type AppTableProps = {
    appProps: Application[];
    appearance?: { baseTheme: any };
    onRowClick: (application: Application) => void;
  };

export function ApplicationsManagerTable() {
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const { getToken } = useAuth(); //add id? to use clerkId

    
    useEffect(() => {
      const fetchApplications = async () => {
        try {
          const token = await getToken();
          const response = await fetch(
            `https://immigrationapi.tomytrt.workers.dev/api/applications`,
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
          console.log(data);
          setApplications(data);
        } catch (e: any) {
          throw new Error("Failed to fetch applications");
        }
      };
  
      fetchApplications();
    }, []);

    useEffect(() => {
        if(selectedApplication){
            router.push(`/template-manager/${selectedApplication.id}`);
        }
    },[selectedApplication]);

  return (
    <div className="p-4 space-y-4">

      <HeaderBreadCrumbs rootName={"Applications"} />
      <Button  asChild>
        <Link href="/template-manager/creator">Create New Application</Link>
      </Button>
      <Table>
      <TableHeader className="bg-[#5E5E5E] text-primary-white ">
        {/* Give it Link */}
        <TableRow className="">
          <TableHead className="rounded-tl-md">Number</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead className="rounded-tr-md">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border">
        {applications.map((app, index) => (
          // jump to tasks
          // <Link href={`/applications/${app.id}`} key={app.id}>
          <TableRow
            key={app.id}
            onClick={() => setSelectedApplication(app)}
            className="cursor-pointer hover:bg-primary-gray"
          >
            <TableCell className="last: rounded-bl-md bg-white">
              {index + 1}
            </TableCell>
            <TableCell className="bg-white">{app.applicationName}</TableCell>
            <TableCell className="bg-white">{app.applicationDate}</TableCell>
            <TableCell className="bg-white">{app.applicationType}</TableCell>
            <TableCell className="bg-white">
              <Progress value={app.progress} className="w-[100px] " />
            </TableCell>
            <TableCell className="last: rounded-br-md bg-white">
              <Badge
                variant={
                  app.applicationStatus === "Completed"
                    ? "default"
                    : app.applicationStatus === "Rejected"
                    ? "destructive"
                    : app.applicationStatus === "Processing"
                    ? "secondary"
                    : "outline"
                }
              >
                {app.applicationStatus}
              </Badge>
            </TableCell>
          </TableRow>
          // </Link>
        ))}
      </TableBody>
    </Table>

    </div>
  );
}
