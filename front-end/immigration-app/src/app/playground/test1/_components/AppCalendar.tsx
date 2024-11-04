"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function AppCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const bookedDays = [
    { date: new Date(), title: "plan title1" },
    { date: new Date(2024, 10, 13), title: "plan title2" },
    { date: new Date(2024, 10, 25), title: "plan title3" },
  ];

  return (
    <DayPicker
      today={new Date()}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 w-[150px] h-[150px] font-bold text-right border border-secondary-lightGray text-md focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        // day: cn(
        //   buttonVariants({ variant: "ghost" }),
        //   "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        // ),
      }}
      // modifiersClassNames={{
      //   today: "bg-accent text-accent-foreground", // apply today style
      //   selected:
      //     "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground", // selectedの日に適用
      //   outside: "text-muted-foreground opacity-50", // outsideの日に適用
      //   disabled: "text-muted-foreground opacity-50", // disabledの日に適用
      // }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
        Day(props) {
          bookedDays.forEach((day) => {
            console.log(day);
          });

          const isPlanDate = bookedDays.some(
            (day) =>
              day.date.getFullYear() === props.date.getFullYear() &&
              day.date.getMonth() === props.date.getMonth() &&
              day.date.getDate() === props.date.getDate()
          );

          const isToday =
            new Date() &&
            props.date.getFullYear() === new Date().getFullYear() &&
            props.date.getMonth() === new Date().getMonth() &&
            props.date.getDate() === new Date().getDate();

          // bookedDays.find((day) => {
          //   console.log("⭐️", day.date, props.date, day.date === props.date);
          // });

          return (
            <div
              className={cn(
                "flex flex-col justify-between h-full",
                isToday && "bg-primary-red/10 text-accent-foreground"
              )}
            >
              <span className="p-2">{props.date.getDate()}</span>
              {isPlanDate && (
                <div className="flex items-center bg-primary-red/10 relative">
                  <span className="w-1 h-full bg-primary-red pr-1"></span>
                  <span className="flex items-center justify-center w-full text-xs py-2 text-primary-red">
                    {
                      bookedDays.find(
                        (day) =>
                          day.date.getFullYear() === props.date.getFullYear() &&
                          day.date.getMonth() === props.date.getMonth() &&
                          day.date.getDate() === props.date.getDate()
                      )?.title
                    }
                  </span>
                </div>
              )}
            </div>
          );
        },
      }}
      {...props}
    />
  );
}

AppCalendar.displayName = "Calendar";

export { AppCalendar };
