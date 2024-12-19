'use client'

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
import { Badge } from "@/components/ui/badge";
import { Task } from "@/type/Applications.type";

  
type TaskTableProps = {
  taskList: Task[];
};

export function TaskCreatorManagerTable({  taskList }: TaskTableProps) {

  return (
    <div className=" mt-10 p-4 space-y-4">
      <Table>
        <TableHeader className="bg-[#5E5E5E] text-primary-white ">
          {/* Give it Link */}
          <TableRow className="">
            <TableHead className="rounded-tl-md">Number</TableHead>
            <TableHead>title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="rounded-tr-md">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border">
          {taskList.map((task, index) => (
            // jump to tasks
            // <Link href={`/applications/${app.id}`} key={app.id}>
            <TableRow
              key={task.id}
              className="cursor-pointer hover:bg-primary-gray"
            >
              <TableCell className="last: rounded-bl-md bg-white">
                {index + 1}
              </TableCell>
              <TableCell className="bg-white">{task.title}</TableCell>
              <TableCell className="bg-white">{task.description}</TableCell>

              <TableCell className="last: rounded-br-md bg-white">
                <Badge
                  variant={
                    task.isCompleted === true
                      ? "default"
                      : "destructive"
                  }
                >
                  {task.isCompleted === true ? "Completed" : "Processing"}
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