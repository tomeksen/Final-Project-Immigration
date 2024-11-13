import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BiCommentDots } from "react-icons/bi";
import { GoPaperclip } from "react-icons/go";

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

type TaskProps = {
  appProps: Task[];
  appearance?: { baseTheme: any };
};

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

export function TaskList() {
  return (
    <div className="w-72">
      <Table>
        <TableHeader className="bg-[#5E5E5E] text-primary-white">
          <TableRow className="">
            <TableHead className="rounded-t-md">Getting start</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Count is_completed === true, and divide it by tasks.length */}
          <Progress value={tasks.length} className="w-[100px] " />

          {tasks.map((task) => (
            <TableRow id={task.id}>
              <TableCell className="p-6">
                <div className="flex items-center leading-none space-x-2">
                  {task.is_completed === true ? (
                    <Checkbox checked />
                  ) : (
                    <Checkbox />
                  )}
                  <Label htmlFor="" className="text-sm leading-none">
                    {task.title}
                  </Label>
                </div>
                <div className="flex items-center justify-between  leading-none space-x-2 p-4">
                  <div className="flex items-center justify-center text-[]">
                    <BiCommentDots className="mr-3" />
                    <p className="mr-6">1</p>
                    <GoPaperclip className="mr-3" />
                    <p className="mr-6">0</p>
                  </div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
