"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "./ui/checkbox";

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
  tasks: Task[];
  appearance?: { baseTheme: any };
  onClose: () => void;
};

// const tasks: Task[] = [
//   {
//     id: "1",
//     category_id: "cat001",
//     comment_id: "com001",
//     service_connection_id: "srv001",
//     title: "Complete Project Documentation",
//     is_completed: false,
//     dueDate: new Date("2024-11-10"),
//     description: "Prepare and submit comprehensive project documentation.",
//     steps: "1. Outline structure\n2. Add key details\n3. Review",
//     instruction: "Ensure the document covers all project requirements.",
//     notes: "Check previous project templates for reference.",
//   },
//   {
//     id: "2",
//     category_id: "cat002",
//     comment_id: "com002",
//     service_connection_id: "srv002",
//     title: "Design Initial Wireframes",
//     is_completed: true,
//     dueDate: new Date("2024-10-15"),
//     description: "Create wireframes for the new app interface.",
//     steps: "1. Sketch ideas\n2. Design with tool\n3. Get feedback",
//     instruction: "Focus on user experience and simplicity.",
//     notes: "Consider mobile-first design approach.",
//   },
//   {
//     id: "3",
//     category_id: "cat003",
//     comment_id: "com003",
//     service_connection_id: "srv003",
//     title: "Team Meeting Preparation",
//     is_completed: false,
//     dueDate: new Date("2024-11-05"),
//     description: "Prepare for the upcoming project status meeting.",
//     steps: "1. Gather updates\n2. Create agenda\n3. Share agenda",
//     instruction: "Highlight key milestones and challenges.",
//     notes: "Include time for Q&A and feedback.",
//   },
//   {
//     id: "4",
//     category_id: "cat001",
//     comment_id: "com004",
//     service_connection_id: "srv004",
//     title: "Code Review Session",
//     is_completed: false,
//     dueDate: new Date("2024-11-08"),
//     description:
//       "Conduct a detailed review of the codebase for the new feature.",
//     steps: "1. Allocate reviewers\n2. Review code\n3. Document feedback",
//     instruction: "Ensure to cover best practices and performance.",
//     notes: "Check for security vulnerabilities.",
//   },
//   {
//     id: "5",
//     category_id: "cat004",
//     comment_id: "com005",
//     service_connection_id: "srv005",
//     title: "Deploy to Staging Environment",
//     is_completed: true,
//     dueDate: new Date("2024-10-20"),
//     description:
//       "Deploy the latest build to the staging environment for testing.",
//     steps: "1. Verify code integrity\n2. Deploy\n3. Run initial tests",
//     instruction: "Coordinate with the QA team after deployment.",
//     notes: "Ensure backups are taken before deployment.",
//   },
// ];

export function AppSheet({ tasks, onClose }: TaskProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {tasks.map((task) => (
        <Sheet key={"task.id"}>
          <SheetTrigger asChild>
            <Button variant="outline">{task.title}</Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center leading-none space-x-2">
                  <Checkbox defaultChecked={task.is_completed} />
                  <Label htmlFor="" className="text-right">
                    {task.title}
                  </Label>
                </div>
              </SheetTitle>
              {/* <div>
              <Label>Task Description:</Label>
              <SheetDescription className="text-black">
                Prepare and submit comprehensive project documentation.
              </SheetDescription>
            </div> */}
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label className="font-bold">Due Date:</Label>
                <p className="text-sm">1 Aug 24, 16:00 PM</p>
              </div>
              <div>
                <Label className="font-bold">Task Description:</Label>
                <SheetDescription className="text-black">
                  {task.description}
                </SheetDescription>
              </div>
              <div>
                <Label className="font-bold">Steps:</Label>
                <ol>
                  {task.steps.split("\n").map((step, id) => (
                    <li className="text-sm" key={id}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="text-primary-red">
                <Label className="font-bold">Notes:</Label>
                <p className="text-sm">{task.notes}</p>
              </div>
            </div>
            <SheetFooter>
              {/* <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose> */}
              <div>
                <Label className="font-bold">Attachments:</Label>
              </div>
              <div>
                <Label className="font-bold">Messages:</Label>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
