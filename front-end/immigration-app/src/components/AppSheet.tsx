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

type Task = {
  id: string;
  categoryId: string;
  comment_id: string;
  service_connection_id: string;
  title: string;
  is_completed: boolean;
  dueDate: Date;
  description: string;
  steps: string;
  instruction: string;
  notes: string;
};

type TaskProps = {
  task: Task | null;
  appearance?: { baseTheme: any };
  onClose: () => void;
};

export function AppSheet({ task, onClose }: TaskProps) {
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
                    <Checkbox defaultChecked={task.is_completed} />
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
                  <ol>
                    {task.steps.split("\n").map((step, id) => (
                      <li className="text-sm" key={id}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="text-primary-red">
                  <Label className="font-bold">Notes:</Label>
                  <p className="text-sm">{task.notes}</p>
                </div>
              </div>
              <SheetFooter className="flex justify-center items-center">
                {/* <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose> */}
                <div className="flex justify-center items-center">
                  <Label className="font-bold">Attachments:</Label>

                  <Label className="font-bold">Messages:</Label>
                </div>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
      {/* ))} */}
    </div>
  );
}
