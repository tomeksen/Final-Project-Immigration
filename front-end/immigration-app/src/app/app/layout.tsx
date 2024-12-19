"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ClerkProvider } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </ClerkProvider>;
}
