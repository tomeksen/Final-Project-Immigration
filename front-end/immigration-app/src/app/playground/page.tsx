import { AppSheet } from "@/components/AppSheet";
import { ApplicationsTable } from "@/components/dashboard/applications/ApplicationsTable";
import { TaskManager } from "@/components/dashboard/applications/TaskManager";
import { AppSidebar } from "@/components/dashboard/sidebar/AppSideBar";
import { TaskList } from "@/components/TaskList";
import { SidebarProvider } from "@/components/ui/sidebar";

const TestPage = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="p-6">
          <ApplicationsTable />
        </div>
      </SidebarProvider>
    </>
  );
};

export default TestPage;
