'use client'

import { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';

type TaskTableProps = {
  taskList: Task[];
  onDeleteTask: (taskId: number) => void;
};

export function TaskCreatorManagerTable({ taskList, onDeleteTask }: TaskTableProps) {
  return (
    <div className="mt-10 p-4 space-y-4">
      <Table>
        <TableHeader className="bg-[#5E5E5E] text-primary-white ">
          <TableRow>
            <TableHead className="rounded-tl-md">Number</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="rounded-tr-md">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border">
          {taskList.map((task, index) => (
            <TableRow
              key={task.id}
              className="cursor-pointer hover:bg-primary-gray"
            >
              <TableCell className="last:rounded-bl-md bg-white">
                {index + 1}
              </TableCell>
              <TableCell className="bg-white">{task.title}</TableCell>
              <TableCell className="bg-white">{task.description}</TableCell>
              <TableCell className="last:rounded-br-md bg-white">
                <Badge
                  variant={task.isCompleted ? "default" : "destructive"}
                >
                  {task.isCompleted ? "Completed" : "Processing"}
                </Badge>
              </TableCell>
              <TableCell className="bg-white">
                <Button variant="outline" size="icon" onClick={() => onDeleteTask(task.id!)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}