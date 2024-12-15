"use client";
import { TaskManager } from "@/components/dashboard/applications/TaskManager";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const TasksPage = ({ params }: { params: { applicationId: string } }) => {
  const applicationId = params.applicationId;

  // fetch an application that is clicked
  // pass it to get category and tasks to TaskList component

  return (
    <>
      <section className="h-full container mx-auto flex flex-col p-3 w-full">
        <TaskManager
          applicationId={applicationId}
          application={{
            // delete: not need application attribute
            id: 0,
            userId: "",
            name: "",
            date: "",
            type: "",
            progress: 0,
            status: "",
          }}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </section>
    </>
  );
};

export default TasksPage;
