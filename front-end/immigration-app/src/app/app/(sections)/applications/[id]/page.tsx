import { TaskManager } from "@/components/dashboard/applications/TaskManager";
import { AppSidebar } from "@/components/dashboard/sidebar/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const TasksPage = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="p-6">
          <TaskManager
            application={{
              id: 0,
              user_id: "",
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
