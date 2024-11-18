"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type BookedDays = {
  startDate: Date;
  endDate: Date;
  title: string;
}[];

export type CalendarProps = Omit<
  React.ComponentProps<typeof DayPicker>,
  "mode" | "selected"
> & { bookedDays: BookedDays };

function MobileCalendar({
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
  //     endDate: new Date(2024, 10, 27),
  //     title: "One-day Event",
  //   },
  // ];

  // function to generate booked dates
  const bookedMatcher = bookedDays.map((range) => ({
    from: range.startDate,
    to: range.endDate,
  }));

  return (
    // The size can be adjusted by modifying the cell and caption
    <DayPicker
      mode="default"
      modifiers={{ booked: bookedMatcher }}
      modifiersClassNames={{
        booked: "w-8 h-8 rounded-full border border-primary-red",
      }}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 bg-primary-gray rounded-t-lg rounded-b-lg",
        caption: "flex justify-center relative items-center pt-3",
        caption_label: "font-medium text-background",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-background"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table:
          "w-full border-collapse space-y-1 bg-background dark:bg-secondary-darkGray rounded-b-lg",
        head_row:
          "flex border-b border-secondary-lightGray text-secondary-darkGray dark:text-primary-black text-xs rounded-t-md px-6",
        head_cell: "w-9 font-normal text-md text-bold p-2",
        row: "flex w-full px-5 py-2",
        cell: cn(
          "relative p-0 w-9 h-9 font-bold text-right text-md focus-within:relative focus-within:z-20"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 rounded-full font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "h-8 w-8 rounded-full border-2 border-primary-red bg-background",
        day_today:
          "rounded-full bg-primary-red/20 border border-primary-red text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...iconProps }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...iconProps }) => (
          <ChevronRightIcon className="h-4 w-4" />
        ),
      }}
      {...props}
    />
  );
}
MobileCalendar.displayName = "Calendar";

export { MobileCalendar };
