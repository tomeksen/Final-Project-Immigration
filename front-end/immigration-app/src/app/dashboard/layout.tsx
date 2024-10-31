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
    <SidebarProvider>
    <ClerkProvider>
      <AppSidebar />
      <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                size="sm"
                className="text-black hover:bg-yellow-400"
              >
                Sign In / Sign Up
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      {children}
    </ClerkProvider>
    </SidebarProvider>

  )
}

