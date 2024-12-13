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
      <SidebarProvider>
        <div className="p-6">
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
        </div>
      </SidebarProvider>
    </>
  );
};

export default TasksPage;
