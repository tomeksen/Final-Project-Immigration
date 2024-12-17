"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "./ui/checkbox";
import { Task } from "@/type/Applications.type";

type TaskProps = {
  task: Task | null;
  appearance?: { baseTheme: any };
  onClose: () => void;
};

export function AppSheet({ task, onClose }: TaskProps) {
  const formattedSteps = (steps: Record<string, string>) => {
    return Object.entries(steps).map(([key, value]) => (
      <li key={key} className="text-sm">
        {key}: {value}
      </li>
    ));
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {/* {tasks.map((task) => ( */}
      <Sheet
        open={!!task}
        onOpenChange={(open) => !open && onClose()}
        key={"task.id"}
      >
        {/* <SheetTrigger asChild>
          <Button variant="outline">{task.title}</Button>
        </SheetTrigger> */}
        <SheetContent side={"right"}>
          {task && (
            <>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center leading-none space-x-2">
                    <Checkbox defaultChecked={task.isCompleted} />
                    <Label htmlFor="" className="text-right">
                      {task.title}
                    </Label>
                  </div>
                </SheetTitle>
                {/* <div>
              <Label>Task Description:</Label>
              <SheetDescription className="text-black">
                Prepare and submit comprehensive project documentation.
              </SheetDescription>
            </div> */}
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Label className="font-bold">Due Date:</Label>
                  <p className="text-sm">1 Aug 24, 16:00 PM</p>
                </div>
                <div>
                  <Label className="font-bold">Task Description:</Label>
                  <SheetDescription className="text-black">
                    {task.description}
                  </SheetDescription>
                </div>
                <div>
                  <Label className="font-bold">Steps:</Label>
                  <ol>{formattedSteps(task.steps)}</ol>
                </div>
                <div className="text-primary-red">
                  <Label className="font-bold">Notes:</Label>
                  <p className="text-sm">{task.notes}</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Attachments:</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Messages:</Label>
                  <Input id="message" placeholder="Ask a question!" />
                </div>
                <Button
                  className="w-full bg-red-700 hover:bg-red-800"
                  size="lg"
                >
                  Send
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
      {/* ))} */}
    </div>
  );
}
