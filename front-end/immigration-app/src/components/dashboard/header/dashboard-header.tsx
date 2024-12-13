'use client'
import { Button } from "@/components/ui/button";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
  } from '@clerk/nextjs'

export default function DashboardHeader() {
  const user = useUser();
  return (
    <header className="flex items-end justify-end border-b p-1">
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
