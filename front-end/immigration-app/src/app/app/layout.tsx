'use client'
import { Button } from '@/components/ui/button';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ClerkProvider>
        {children}
      </ClerkProvider>
  )
}

