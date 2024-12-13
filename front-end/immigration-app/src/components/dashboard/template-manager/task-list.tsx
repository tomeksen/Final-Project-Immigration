'use client'

import { useState } from "react";
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
  
  // fetch data based on category_id
  const tasks: Task[] = [
    {
      id: "1",
      category_id: "cat001",
      comment_id: "com001",
      service_connection_id: "srv001",
      title: "Complete Project Documentation",
      is_completed: false,
      dueDate: new Date("2024-11-10"),
      description: "Prepare and submit comprehensive project documentation.",
      steps: "1. Outline structure\n2. Add key details\n3. Review",
      instruction: "Ensure the document covers all project requirements.",
      notes: "Check previous project templates for reference.",
    },
    {
      id: "2",
      category_id: "cat002",
      comment_id: "com002",
      service_connection_id: "srv002",
      title: "Design Initial Wireframes",
      is_completed: true,
      dueDate: new Date("2024-10-15"),
      description: "Create wireframes for the new app interface.",
      steps: "1. Sketch ideas\n2. Design with tool\n3. Get feedback",
      instruction: "Focus on user experience and simplicity.",
      notes: "Consider mobile-first design approach.",
    },
    {
      id: "3",
      category_id: "cat003",
      comment_id: "com003",
      service_connection_id: "srv003",
      title: "Team Meeting Preparation",
      is_completed: false,
      dueDate: new Date("2024-11-05"),
      description: "Prepare for the upcoming project status meeting.",
      steps: "1. Gather updates\n2. Create agenda\n3. Share agenda",
      instruction: "Highlight key milestones and challenges.",
      notes: "Include time for Q&A and feedback.",
    },
    {
      id: "4",
      category_id: "cat001",
      comment_id: "com004",
      service_connection_id: "srv004",
      title: "Code Review Session",
      is_completed: false,
      dueDate: new Date("2024-11-08"),
      description:
        "Conduct a detailed review of the codebase for the new feature.",
      steps: "1. Allocate reviewers\n2. Review code\n3. Document feedback",
      instruction: "Ensure to cover best practices and performance.",
      notes: "Check for security vulnerabilities.",
    },
    {
      id: "5",
      category_id: "cat004",
      comment_id: "com005",
      service_connection_id: "srv005",
      title: "Deploy to Staging Environment",
      is_completed: true,
      dueDate: new Date("2024-10-20"),
      description:
        "Deploy the latest build to the staging environment for testing.",
      steps: "1. Verify code integrity\n2. Deploy\n3. Run initial tests",
      instruction: "Coordinate with the QA team after deployment.",
      notes: "Ensure backups are taken before deployment.",
    },
  ];

type TaskTableProps = {
  CategoryId: string;
  appearance?: { baseTheme: any };
  onRowClick?: (task: Task) => void;
};

export function TaskManagerTable({ CategoryId }: TaskTableProps) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(
    null
  );
  
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