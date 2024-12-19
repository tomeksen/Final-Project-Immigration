"use client";

import React, { useEffect, useState } from "react";
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
import { Task, TaskComment } from "@/type/Application.type";
import { useAuth } from "@clerk/nextjs";

type TaskProps = {
  task: Task | null;
  appearance?: { baseTheme: any };
  comments: TaskComment[];
  onClose: () => void;
};

export function AppSheet({ task, comments, onClose }: TaskProps) {
  const { userId } = useAuth();

  const formattedSteps = (steps: Record<string, string>) => {
    return Object.entries(steps).map(([key, value]) => (
      <li key={key} className="text-sm">
        {key}: {value}
      </li>
    ));
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet
        open={!!task}
        onOpenChange={(open) => !open && onClose()}
        key={"task.id"}
      >
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
                  <ul className="bg-secondary-lightGray rounded-md h-52">
                    {comments.map((comment) => (
                      <li
                        key={comment.id}
                        className={`text-sm p-2 rounded-lg ${
                          comment.userId === userId
                            ? "self-end text-right"
                            : " self-start text-left"
                        }`}
                      >
                        {comment.commentContent}
                      </li>
                    ))}
                  </ul>

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
    </div>
  );
}
