'use client'
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes';

export default function Page() {
  const  {theme}= useTheme();
  return (
  <div className="grid grid-cols-2 min-h-screen md:grid-cols-2">
  <div className="relative hidden md:block">
    <img
      src="https://b991227.smushcdn.com/991227/wp-content/uploads/49428195153_ddbd3bbb45_o-2-scaled.jpg?lossy=1&strip=1&webp=1"
      alt="Mountain landscape with turquoise lake"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
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