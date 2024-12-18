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
import { useAuth } from "@clerk/nextjs";

type Task = {
    id: string;
    category_id: string;
    comment_id: string;
    service_connection_id: string;
    title: string;
    is_completed: boolean;
    dueDate: Date;
    description: string;
    steps: string;
    instruction: string;
    notes: string;
  };
  
type TaskTableProps = {
  CategoryId: string;
  appearance?: { baseTheme: any };
  onRowClick?: (task: Task) => void;
};

export function TaskManagerTable({ CategoryId }: TaskTableProps) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(
    null
  );
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Task | null>(
    null
    );

  useEffect(() => {
      const fetchApplications = async () => {
        try {
          const { getToken } = useAuth();
          const token = await getToken();
          const response = await fetch(
            `https://immigrationapi.tomytrt.workers.dev/api/tasks/${CategoryId}`,
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
          
          setTasks(data);
        } catch (e: any) {
          throw new Error("Failed to fetch applications");
        }
      };
  
      fetchApplications();
    }, []);
  return (
    <div className="p-4 space-y-4">
      <HeaderBreadCrumbs rootName={`Applications > Category > ${CategoryId}`} rootHref={`/template-manager/${CategoryId}`} breadName={CategoryId} />
      <Button  asChild>
        <Link href="/template-manager/creator">Create New Task</Link>
      </Button>
      <Table>
        <TableHeader className="bg-[#5E5E5E] text-primary-white ">
          {/* Give it Link */}
          <TableRow className="">
            <TableHead className="rounded-tl-md">Number</TableHead>
            <TableHead>title</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="rounded-tr-md">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border">
          {tasks.map((task, index) => (
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
              <TableCell className="bg-white">{task.dueDate.toString()}</TableCell>

              <TableCell className="last: rounded-br-md bg-white">
                <Badge
                  variant={
                    task.is_completed === true
                      ? "default"
                      : "destructive"
                  }
                >
                  {task.is_completed === true ? "Completed" : "Processing"}
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