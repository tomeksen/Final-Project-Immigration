"use client";
import { Button } from "@/components/ui/button";
import BookComp from "./_components/BookComp";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MobileCalendar } from "@/components/common/Calendar/MobileCalendar";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { DesktopCalendar } from "@/components/common/Calendar/DesktopCalendar";
import SideSchedule from "@/components/common/Calendar/SideSchedule";
import MobileSideSchedule from "@/components/common/Calendar/MobileSideSchedule";
import { useUser, useAuth } from "@clerk/nextjs";
import AddEventForm from "@/components/dashboard/calendar/addEventForm";

import { apiClientFetch } from "@/config/apiClient";
import { ERROR_MESSAGES } from "@/config/ErrorMessage";

import LottieLoading from "@/components/common/LottieLoading";
import ErrorMessage from "@/components/common/ErrorMessage";
import { EventFiltered, Event } from "@/type/appointment.type";

type ActiveTabType = "appointment" | "schedule" | "addEvent";
const AppointmentsPage = () => {
  const user = useUser();
  const { getToken } = useAuth();

  const isAdminUser = user.user?.publicMetadata.role === "admin" ? true : false;
  const [activeTab, setActiveTab] = useState<ActiveTabType>("schedule");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const userId = user.user?.id;
  const [event, setEvent] = useState<EventFiltered[]>([]);
  // const convertToDateConstructorFormat = (date: Date): string => {
  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  //   const day = date.getDate();

  //   return `new Date(${year}, ${month}, ${day})`;
  // };

  const formattedEvent = (data: Event[]): EventFiltered[] => {
    return data.map((event) => ({
      title: event.title,
      startDate: parseDateString(event.eventDateStart),
      endDate: parseDateString(event.eventDateFinish),
      location: event.isOnline ? "Zoom" : "Offline",
      details: event.meetingCode,
    }));
  };

  console.log(formattedEvent);

  const parseDateString = (dateTimeString: string): Date => {
    const isoString = dateTimeString.replace(" ", "T");
    return new Date(isoString);
  };

  useEffect(() => {
    if (!userId) {
      console.warn("User ID is not available yet.");
      return;
    }

    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const token = await getToken();

        if (!token) {
          setError(ERROR_MESSAGES.GENERAL.UNEXPECTED);
          setIsLoading(false);
          return;
        }

        // fetch Documents
        const fetchedEvent: Event[] = await apiClientFetch(
          `events/${userId}`,
          token
        );
        console.log(fetchedEvent);

        const newFilteredEvent: EventFiltered[] = formattedEvent(fetchedEvent);
        console.log(newFilteredEvent);

        setEvent(newFilteredEvent);
      } catch (e: any) {
        console.error("Error fetching documents:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [userId, getToken]);

  // console.log("⭐️", event);

  // const bookedDays = [
  //   {
  //     startDate: new Date(2024, 10, 5),
  //     endDate: new Date(2024, 10, 7),
  //     title: "Event 1",
  //   },
  //   {
  //     startDate: new Date(2024, 10, 6),
  //     endDate: new Date(2024, 10, 8),
  //     title: "Event 2",
  //   },
  //   {
  //     startDate: new Date(2024, 10, 25),
  //     endDate: new Date(2024, 10, 25),
  //     title: "One-day Event",
  //   },
  // ];

  const handleTabChange = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  if (isLoading) {
    return <LottieLoading />;
  }

  if (error) {
    return <ErrorMessage title="Appointments" errorMessage={error} />;
  }

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
                <SideSchedule events={event} />
              </div>
              <div className="col-span-3">
                <DesktopCalendar bookedDays={event} />
              </div>
            </div>

            {/* for lg */}
            <div className="hidden xl:hidden lg:grid lg:grid-rows-[auto, auto] h-full">
              <DesktopCalendar bookedDays={event} />
              <MobileSideSchedule events={event} />
            </div>

            {/* for smaller than lg */}
            <div className="xl:hidden lg:hidden grid-rows-[auto,auto] h-full">
              <div className="flex items-center justify-center">
                <MobileCalendar bookedDays={event} />
              </div>
              <div className="">
                <MobileSideSchedule events={event} />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AppointmentsPage;
