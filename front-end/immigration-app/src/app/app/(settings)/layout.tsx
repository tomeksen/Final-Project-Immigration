import DashboardHeader from "@/components/dashboard/header/dashboard-header";
import { AppSidebar } from "@/components/dashboard/sidebar/AppSideBar";

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
  <AppSidebar />
    <div className="flex flex-col w-full">
      <DashboardHeader/>
      <div className="flex-grow">
        {children}
        </div>
      </div>
  </div>
  );
}
