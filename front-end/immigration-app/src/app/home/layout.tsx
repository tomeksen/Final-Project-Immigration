"use client";

import Footer from "@/components/staticPage/footer/Footer";
import Header from "@/components/staticPage/header/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
