'use client'

import Header from "@/components/header/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

