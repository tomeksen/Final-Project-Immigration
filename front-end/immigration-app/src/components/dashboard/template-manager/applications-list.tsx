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

export type Application = {
  id: number;
  user_id: string;
  name: string;
  date: string;
  type: string;
  progress: number;
  status: string;
};

const applications: Application[] = [
  {
    id: 1,
    user_id: "001",
    name: "Maria_CICCC_181",
    date: "04 Apr 2023",
    type: "Student",
    progress: 100,
    status: "Completed",
  },
  {
    id: 2,
    user_id: "002",
    name: "Maria_CICCC_UX/UI",
    date: "15 Nov 2023",
    type: "Student",
    progress: 100,
    status: "Rejected",
  },
  {
    id: 3,
    user_id: "003",
    name: "Maria_CICCC_UX/UI_2",
    date: "08 Jul 2024",
    type: "Student",
    progress: 50,
    status: "Processing",
  },
  {
    id: 4,
    user_id: "004",
    name: "Maria_Work Permit",
    date: "09 Jul 2024",
    type: "Work Permit",
    progress: 75,
    status: "On Hold",
  },
  {
    id: 5,
    user_id: "005",
    name: "Carry_Visitor",
    date: "09 Jul 2024",
    type: "Visitor",
    progress: 25,
    status: "Processing",
  },
];

type AppTableProps = {
    appProps: Application[];
    appearance?: { baseTheme: any };
    onRowClick: (application: Application) => void;
  };

export function ApplicationsManagerTable() {
    const router = useRouter();
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

    useEffect(() => {
        if(selectedApplication){
            router.push(`/template-manager/${selectedApplication.id}`);
        }
    },[selectedApplication]);

  return (
    <div className="p-4 space-y-4">

      <HeaderBreadCrumbs rootName={"Applications"} />

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
            <TableCell className="bg-white">{app.name}</TableCell>
            <TableCell className="bg-white">{app.date}</TableCell>
            <TableCell className="bg-white">{app.type}</TableCell>
            <TableCell className="bg-white">
              <Progress value={app.progress} className="w-[100px] " />
            </TableCell>
            <TableCell className="last: rounded-br-md bg-white">
              <Badge
                variant={
                  app.status === "Completed"
                    ? "default"
                    : app.status === "Rejected"
                    ? "destructive"
                    : app.status === "Processing"
                    ? "secondary"
                    : "outline"
                }
              >
                {app.status}
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
