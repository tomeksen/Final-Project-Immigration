"use client";

import { AppSheet } from "@/components/AppSheet";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { TaskList } from "@/components/TaskList";
import React, { useState } from "react";
import { Application } from "./ApplicationsTable";

type Category = {
  id: string;
  applicationId: string;
  name: string;
  order: number;
};

// fetch data based on application_id
const categories: Category = {
  id: "",
  applicationId: "",
  name: "",
  order: 0,
};

type Task = {
  id: string;
  categoryId: string;
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
    categoryId: "cat001",
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
    categoryId: "cat002",
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
    categoryId: "cat003",
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
    categoryId: "cat001",
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
    categoryId: "cat004",
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

type TaskManagerProps = {
  application: Application; // delete: not need if TaskManager has applicationId
  onClose: () => void;
  applicationId: string;
};

export function TaskManager({
  application,
  onClose,
  applicationId,
}: TaskManagerProps) {
  /*
  1 fetch categories based on application_id
      const categories = [{id, application_id, name: string, order: number}, {}...]
  2 fetch tasks based on category_id and pass it to TaskLink
      const tasks: Task = [{}]

  */
  // ↓change later
  const filteredTasks = tasks.filter(
    (task) => task.categoryId === application.id.toString()
  );

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <section className="h-full container mx-auto flex flex-col p-3 w-full">
      <HeaderBreadCrumbs rootName="Applications" breadName={"Task Details"} />

      <div className="flex flex-col">
        <TaskList onTaskClick={handleTaskClick} tasks={tasks} />
      </div>

      {selectedTask && (
        <AppSheet task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </section>
  );
}
