import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export default function DashboardHeader() {
  return (
    <header className="flex items-end justify-end border-b p-1">
      <div className="">
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
          </div>
    </header>
  );
}
