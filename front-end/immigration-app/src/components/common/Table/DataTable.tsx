"use client";

import React from "react";

import { AppDocTableType } from "./TableFilters";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DataBadge from "./DataBadge";

type AppTableProps = {
  data: AppDocTableType[];
  appearance?: { baseTheme: any };
  className?: string;
};

export function DataTable({ data, appearance, className }: AppTableProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="hidden lg:block">
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
                  <DataBadge data={d} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Card className="lg:hidden ">
        {data.map((d, index) => (
          <div key={d.id}>
            <Card
              className="cursor-pointer hover:bg-gray-50 border-0 shadow-none"
              onClick={() => router.push(`${pathname}/${d.id}`)}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {d.number}
                      </span>
                      <span className="font-medium">{d.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{d.date}</span>
                      <span>·</span>
                      <span>{d.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <Progress value={d.progress} className="w-[100px] " />
                      <span className="text-sm text-muted-foreground min-w-[40px]">
                        {d.progress}%
                      </span>
                    </div>
                    <DataBadge data={d} />
                  </div>
                </div>
              </CardContent>
            </Card>
            {index < data.length - 1 && <Separator className="my-0" />}
          </div>
        ))}
      </Card>
    </>
  );
}
