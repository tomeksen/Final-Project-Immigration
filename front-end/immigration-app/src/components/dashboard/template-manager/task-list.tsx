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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Task } from "@/type/Applications.type";

  
type TaskTableProps = {
  taskList: Task[];
  CategoryId: string;
};

export function TaskManagerTable({ CategoryId, taskList }: TaskTableProps) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(
    null
  );

  return (
    <div className="p-4 space-y-4">
      <HeaderBreadCrumbs rootName={`Applications > ${CategoryId} > Category`} rootHref={`/template-manager/${CategoryId}`} breadName={`${CategoryId}`} />
      <Button  asChild>
        <Link href={`/template-manager/task/${CategoryId}`}>Create New Task</Link>
      </Button>
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
              onClick={() => setSelectedTask(task)}
              className="cursor-pointer hover:bg-primary-gray"
            >
              <TableCell className="last: rounded-bl-md bg-white">
                {task.id}
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