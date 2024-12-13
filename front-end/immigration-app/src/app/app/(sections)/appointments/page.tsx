"use client";
import { Button } from "@/components/ui/button";
import BookComp from "./_components/BookComp";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileCalendar } from "@/components/common/Calendar/MobileCalendar";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { DesktopCalendar } from "@/components/common/Calendar/DesktopCalendar";
import SideSchedule from "@/components/common/Calendar/SideSchedule";
import MobileSideSchedule from "@/components/common/Calendar/MobileSideSchedule";
import { useUser } from "@clerk/nextjs";
import AddEventForm from "@/components/dashboard/calendar/addEventForm";

type ActiveTabType = "appointment" | "schedule" | "addEvent";
const AppointmentsPage = () => {
  const user = useUser();
  const isAdminUser = user.user?.publicMetadata.role === "admin" ? true : false;
  const [activeTab, setActiveTab] = useState<ActiveTabType>("schedule");
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

  const handleTabChange = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="h-full container mx-auto flex flex-col p-3 w-full">
        {/* Header */}
        <HeaderBreadCrumbs
          rootName="Appointment"
          breadName={
            activeTab === "appointment" ? "Book an Appointment" : "My Schedule"
          }
        />

        {/* Choose buttons */}
        <div className="flex items-center gap-2 mb-4">
          {!isAdminUser && (
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
          )}

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
          {isAdminUser && (
            <Button
              variant="outline"
              className={cn(
                activeTab === "addEvent" &&
                  "bg-primary-red hover:bg-primary-red/80 text-white hover:text-white"
              )}
              onClick={() => setActiveTab("addEvent")}
            >
              Add Event
            </Button>
          )}
        </div>

        {/* Book an Appointment */}
        {activeTab === "appointment" && <BookComp />}
        {activeTab === "addEvent" && (
          <div className="mt-20">
            <AddEventForm onFormSubmit={() => handleTabChange("schedule")} />
          </div>
        )}
        {/* My Schedule */}
        {activeTab === "schedule" && (
          <div className="flex flex-col">
            {/* for xl */}
            <div className="hidden xl:grid xl:grid-cols-4">
              <div className="col-span-1">
                <SideSchedule />
              </div>
              <div className="col-span-3">
                <DesktopCalendar bookedDays={bookedDays} />
              </div>
            </div>

            {/* for lg */}
            <div className="hidden xl:hidden lg:grid lg:grid-rows-[auto, auto] h-full">
              <DesktopCalendar bookedDays={bookedDays} />
              <MobileSideSchedule />
            </div>

            {/* for smaller than lg */}
            <div className="xl:hidden lg:hidden grid-rows-[auto,auto] h-full">
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