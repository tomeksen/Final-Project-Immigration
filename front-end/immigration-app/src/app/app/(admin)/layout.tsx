import { AppSidebar } from "@/components/dashboard/sidebar/AppSideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
        <AppSidebar />
        {children}</>;
}