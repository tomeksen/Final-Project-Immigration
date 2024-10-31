'use client'
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes';
import Image from 'next/image'

export default function Page() {
  const  {theme}= useTheme();
  return (
  <div className="grid min-h-screen md:grid-cols-2">
  <div className="relative hidden md:block">
    <Image
      src="/placeholder.svg?height=1080&width=1920"
      alt="Mountain landscape with turquoise lake"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
      priority
    />
  </div>
  <div className="flex items-center justify-center px-8">
    <div className="mx-auto w-full max-w-md space-y-8">
      <div className="space-y-4">
        {
          theme === 'dark' ? <SignIn appearance={{baseTheme: dark}} /> : <SignIn />
        }
        

      </div>
    </div>
  </div>
</div>)
}