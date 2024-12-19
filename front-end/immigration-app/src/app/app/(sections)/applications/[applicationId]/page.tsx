"use client";
import { TaskManager } from "@/components/dashboard/applications/TaskManager";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const TasksPage = ({ params }: { params: { applicationId: number } }) => {
  const applicationId = Number(params.applicationId);

  return (
    <>
      <TaskManager
        applicationId={applicationId}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default TasksPage;
