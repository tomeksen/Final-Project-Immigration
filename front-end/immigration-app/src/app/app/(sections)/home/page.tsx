'use client'
import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const DashboardHome = () => {
    return (
      <>
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
      </>
    )
  };
  
export default DashboardHome;