'use client'
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
  } from '@clerk/nextjs'
import { Bell } from "lucide-react";
import Link from "next/link";

export default function DashboardHeader() {
  const user = useUser();
  return (
    <header className="flex items-center justify-end border-b p-1">
        <div className="pr-4 rounded-sm p-2 transition-colors hover:bg-slate-200">
          <Link href="/notifications" >
              <Bell className="h-6 w-6 text-black"  />
          </Link>
        </div>
        <div className="items-center pr-4">
        <LocaleSwitcher />
        </div>
        <h1 className="pr-3">Hello {user.user?.firstName}!</h1>
          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                size="lg"
                className="text-black  hover:bg-yellow-400"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </header>
  );
}
