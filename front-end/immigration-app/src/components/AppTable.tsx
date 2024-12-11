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

type Application = {
  id: number;
  user_id: string;
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
  return (
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
        {appProps.map((app, index) => (
          // jump to tasks
          // <Link href={`/applications/${app.id}`} key={app.id}>
          <TableRow
            onClick={() => onRowClick(app)}
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
  );
}
