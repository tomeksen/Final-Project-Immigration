import { AppSidebar } from "@/components/dashboard/sidebar/AppSideBar";

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
        <AppSidebar />
        {children}</>;
}
