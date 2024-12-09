"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import BookComp from "./_components/BookComp";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DesktopCalendar } from "@/app/playground/test1/_components/Calendar/DesktopCalendar";
import SideSchedule from "@/app/playground/test1/_components/Calendar/SideSchedule";
import MobileSideSchedule from "@/app/playground/test1/_components/Calendar/MobileSideSchedule";
import { MobileCalendar } from "@/app/playground/test1/_components/Calendar/MobileCalendar";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";

type ActiveTabType = "appointment" | "schedule";
const AppointmentsPage = () => {
  const path = usePathname();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("appointment");
  const bookedDays = [
    {
      startDate: new Date(2024, 10, 5),
      endDate: new Date(2024, 10, 7),
      title: "Event 1",
    },
    {
      startDate: new Date(2024, 10, 6),
      endDate: new Date(2024, 10, 8),
      title: "Event 2",
    },
    {
      startDate: new Date(2024, 10, 25),
      endDate: new Date(2024, 10, 25),
      title: "One-day Event",
    },
  ];
  return (
    <>
      <section className="h-screen max-w-screen container mx-auto flex flex-col p-3">
        <HeaderBreadCrumbs
          rootName="Appointment"
          breadName={
            activeTab === "appointment" ? "Book an Appointment" : "My Schedule"
          }
        />
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="outline"
            className={cn(
              activeTab === "appointment" &&
                "bg-primary-red hover:bg-primary-red/80 text-white hover:text-white"
            )}
            onClick={() => setActiveTab("appointment")}
          >
            Book an Appointment
          </Button>
          <Button
            variant="outline"
            className={cn(
              activeTab === "schedule" &&
                "bg-primary-red hover:bg-primary-red/80 text-white hover:text-white"
            )}
            onClick={() => setActiveTab("schedule")}
          >
            My Schedule
          </Button>
        </div>

        {activeTab === "appointment" && <BookComp />}
        {activeTab === "schedule" && (
          <div className="flex flex-col">
            <div className="hidden xl:grid xl:grid-cols-4">
              <div className="col-span-1">
                <SideSchedule />
              </div>
              <div className="col-span-3">
                <DesktopCalendar bookedDays={bookedDays} />
              </div>
            </div>
            <div className="hidden xl:hidden sm:grid sm:grid-rows-[auto, auto] h-full">
              <DesktopCalendar bookedDays={bookedDays} />

              <MobileSideSchedule />
            </div>
            <div className="xl:hidden sm:hidden grid-rows-[auto,auto] h-full">
              <div className="flex items-center justify-center">
                <MobileCalendar bookedDays={bookedDays} />
              </div>
              <div className="">
                <MobileSideSchedule />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AppointmentsPage;
