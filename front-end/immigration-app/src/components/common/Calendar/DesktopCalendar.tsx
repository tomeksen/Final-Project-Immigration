"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EventFiltered } from "@/type/appointment.type";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  bookedDays: EventFiltered[];
};
// TODO:
// there is more than two events on the same day or more than one day long

function DesktopCalendar({
  className,
  classNames,
  showOutsideDays = true,
  bookedDays,

  ...props
}: CalendarProps) {
  // props example
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
  const isDate = (value: unknown): value is Date => {
    return value instanceof Date && !isNaN(value.getTime());
  };
  console.log("🇪🇸", bookedDays);
  React.useEffect(() => {
    bookedDays.forEach((book) => console.log(isDate(book.startDate)));
  }, []);
  // bookedDays.forEach((book) => {
  //   console.log(
  //     "🚀",
  //     book.startDate.getFullYear(),
  //     book.startDate.getMonth(),
  //     book.startDate.getDate()
  //   );
  // });

  return (
    <Card className="flex-1 w-full flex justify-center">
      <DayPicker
        today={new Date()}
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-lg font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row:
            "flex bg-secondary-lightGray dark:bg-secondary-lightGray dark:text-primary-black rounded-t-md",
          head_cell: " w-[105px] font-normal text-md text-bold p-2",
          row: "flex w-full",
          cell: cn(
            "relative p-0 w-[105px] h-[120px] font-bold text-right border border-secondary-lightGray text-md focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
            props.mode === "range"
              ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
              : "[&:has([aria-selected])]:rounded-md"
          ),
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
          IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
          Day(props) {
            const eventsForDate = bookedDays.filter((event) => {
              console.log("eventForDate⭐️");

              return (
                props.date >= event.startDate && props.date <= event.endDate
              );
            });

            function isSameDate(date1: Date, date2: Date): boolean {
              return (
                date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate()
              );
            }

            const isToday = isSameDate(props.date, new Date());

            return (
              <div
                className={cn(
                  "flex flex-col justify-between  h-full dark:bg-primary-gray",
                  isToday &&
                    "bg-primary-red/10 dark:bg-primary-black text-accent-foreground"
                )}
              >
                <span className="p-2">{props.date.getDate()}</span>
                {eventsForDate.length > 0 && (
                  <div className={`flex flex-col-reverse gap-1 `}>
                    {eventsForDate.map((event, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-primary-red/10 w-full h-6"
                      >
                        <p>{`${props.date.getMonth()} ${event.startDate.getMonth()}`}</p>
                        {/* if the event is the first day, show a line */}
                        {isSameDate(event.startDate, props.date) && (
                          <span className="w-1 h-full bg-primary-red"></span>
                        )}

                        <p>{isSameDate(event.startDate, props.date)}</p>
                        <span className="text-xs py-1 text-primary-red flex-1">
                          {isSameDate(event.startDate, props.date)
                            ? event.title
                            : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          },
        }}
        {...props}
      />
    </Card>
  );
}

DesktopCalendar.displayName = "Calendar";

export { DesktopCalendar };
