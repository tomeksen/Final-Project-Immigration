import DashboardHeader from "@/components/dashboard/header/dashboard-header";
import { AppSidebar } from "@/components/dashboard/sidebar/AppSideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(<div className="flex min-h-screen w-full">
  <AppSidebar />
    <div className="flex flex-col w-full">
      <DashboardHeader/>
      <div className="flex-grow bg-gray-100">
        {children}
        </div>
      </div>
  </div>);
}