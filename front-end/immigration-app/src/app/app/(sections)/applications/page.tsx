import { ApplicationsTable } from "@/components/dashboard/applications/ApplicationsTable";
import { AppSidebar } from "@/components/dashboard/sidebar/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

const ApplicationsPage = () => {
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

export default ApplicationsPage;
