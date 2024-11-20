'use client'
import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider } from '@/components/ui/sidebar';

const DashboardHome = () => {
    return (
      <>
        <SidebarProvider>
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
          </SidebarProvider>
      </>
    )
  };
  
export default DashboardHome;