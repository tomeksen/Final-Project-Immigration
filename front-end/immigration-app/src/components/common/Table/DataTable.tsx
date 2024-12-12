"use client";

import React from "react";

import Link from "next/link";
import { AppDocTableType } from "./TableFilters";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

type AppTableProps = {
  data: AppDocTableType[];
  appearance?: { baseTheme: any };
  className?: string;
};

export function DataTable({ data, appearance, className }: AppTableProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Table className={cn(className)}>
      <TableHeader className="bg-primary-gray text-white">
        {/* Give it Link */}
        <TableRow className="p-4">
          <TableHead className="rounded-tl-md">NUMBER</TableHead>
          <TableHead>NAME</TableHead>
          <TableHead>DATE</TableHead>
          <TableHead>TYPE</TableHead>
          <TableHead>PROGRESS</TableHead>
          <TableHead className="rounded-tr-md">STATUS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border">
        {data.map((d, index) => (
          <TableRow
            key={index}
            onClick={() => router.push(`${pathname}/${d.id}`)}
            className="cursor-pointer hover:bg-primary-gray"
          >
            <TableCell className="last: rounded-bl-md bg-white p-4">
              {d.number}
            </TableCell>
            <TableCell className="bg-white">{d.name}</TableCell>
            <TableCell className="bg-white">{d.date}</TableCell>
            <TableCell className="bg-white">{d.type}</TableCell>
            <TableCell className="bg-white">
              <Progress value={d.progress} className="w-[100px] " />
            </TableCell>
            <TableCell className="last: rounded-br-md bg-white">
              <Badge
                variant={
                  d.status === "Completed"
                    ? "default"
                    : d.status === "Rejected"
                    ? "destructive"
                    : d.status === "Processing"
                    ? "secondary"
                    : "outline"
                }
              >
                {d.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
