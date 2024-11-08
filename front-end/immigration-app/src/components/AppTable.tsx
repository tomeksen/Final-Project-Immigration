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

type Application = {
  number: string;
  name: string;
  date: string;
  type: string;
  progress: number;
  status: string;
};

type AppTableProps = {
  appProps: Application[];
};

export function AppTable({ appProps }: AppTableProps) {
  return (
    <Table>
      <TableHeader className="bg-[#5E5E5E] text-primary-white ">
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
        {appProps.map((app) => (
          <TableRow key={app.number}>
            <TableCell className="last: rounded-bl-md">{app.number}</TableCell>
            <TableCell>{app.name}</TableCell>
            <TableCell>{app.date}</TableCell>
            <TableCell>{app.type}</TableCell>
            <TableCell>
              <Progress value={app.progress} className="w-[100px]" />
            </TableCell>
            <TableCell className="last: rounded-br-md">
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
        ))}
      </TableBody>
    </Table>
  );
}
