"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import Link from "next/link";
import HeaderBreadCrumbs from "./common/HeaderBreadCrumbs";
import { useRouter } from "next/navigation";

type Application = {
  id: number;
  userId: string;
  name: string;
  date: string;
  type: string;
  progress: number;
  status: string;
};

type AppTableProps = {
  appProps: Application[];
  appearance?: { baseTheme: any };
  onRowClick: (application: Application) => void;
};

export function AppTable({ appProps, appearance, onRowClick }: AppTableProps) {
  const router = useRouter();

  const handleRowClick = (app: Application) => {
    router.push(`/applications/${app.id}`);
    onRowClick?.(app);
  };

  return (
    <Table>
      <TableHeader className="bg-[#5E5E5E] text-primary-white ">
        <TableRow className="">
          <TableHead className="rounded-tl-md hidden md:table-cell">
            Number
          </TableHead>
          <TableHead className="hidden md:table-cell">Name</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="hidden md:table-cell">Type</TableHead>
          <TableHead className="hidden md:table-cell">Progress</TableHead>
          <TableHead className="rounded-tr-md hidden md:table-cell">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border">
        {appProps.map((app, index) => (
          <TableRow
            key={app.id}
            onClick={() => handleRowClick(app)}
            className="cursor-pointer hover:bg-primary-gray"
          >
            <TableCell className="last: rounded-bl-md bg-white hidden md:table-cell">
              {index + 1}
            </TableCell>
            <TableCell className="bg-white">
              <p>{app.name}</p>
              <p className="block lg:hidden text-primary-gray">{app.date}</p>
            </TableCell>
            <TableCell className="bg-white hidden md:table-cell">
              {app.date}
            </TableCell>
            <TableCell className="bg-white hidden md:table-cell">
              {app.type}
            </TableCell>
            <TableCell className="bg-white">
              <span>
                <Progress
                  value={app.progress}
                  className="w-[100px] hidden md:table-cell"
                />
              </span>
            </TableCell>
            <TableCell className="last: rounded-br-md bg-white">
              <span>
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
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
