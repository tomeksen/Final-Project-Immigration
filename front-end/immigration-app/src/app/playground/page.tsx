import { AppSidebar } from "@/components/dashboard/sidebar/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

const TestPage = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />

      </SidebarProvider>
    </>
  );
};

export default TestPage;
