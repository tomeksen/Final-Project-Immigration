import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BiCommentDots } from "react-icons/bi";
import { GoPaperclip } from "react-icons/go";
import HeaderBreadCrumbs from "./common/HeaderBreadCrumbs";
import { getUserImage } from "./dashboard/applications/getUserImage";
import { Category, Task, TaskComment } from "@/type/Applications.type";
import { useAuth } from "@clerk/nextjs";

type TaskProps = {
  tasks: Task[];
  categories: Category[];
  appearance?: { baseTheme: any };
  comments: Record<number, TaskComment[]>;
  onTaskClick: (task: Task) => void;
};

export function TaskList({
  tasks,
  onTaskClick,
  categories,
  comments,
}: TaskProps) {
  return (
    <>
      <div className="flex flex-row space-x-4 overflow-x-auto">
        {categories.map((category) => (
          <Table key={category.id} className="w-72">
            <TableHeader className="bg-[#5E5E5E] text-primary-white">
              <TableRow className="">
                <TableHead className="rounded-t-md">
                  {category.categoryName}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Count is_completed === true, and divide it by tasks.length */}
              {/* <TableRow>
            <TableCell>
              <Progress value={tasks.length} className="w-[100px] " />
            </TableCell>
          </TableRow> */}

              {tasks.map(
                (task) =>
                  task.categoryId === category.id && (
                    <TableRow key={task.id} onClick={() => onTaskClick(task)}>
                      <TableCell className="p-6 bg-white">
                        <div className="flex items-center leading-none space-x-2">
                          {task.isCompleted === true ? (
                            <Checkbox checked />
                          ) : (
                            <Checkbox />
                          )}
                          <Label htmlFor="" className="text-sm leading-none">
                            {task.title}
                          </Label>
                        </div>
                        <div className="flex items-center justify-between  leading-none space-x-2 p-4">
                          <div className="flex items-center justify-center text-[]">
                            <BiCommentDots className="mr-3" />
                            <p className="mr-6">
                              {task.id !== undefined ? comments[task.id]?.length || 0 : 0}
                            </p>
                            <GoPaperclip className="mr-3" />
                            <p className="mr-6">0</p>
                          </div>
                          {/* <Avatar>
                    {imageUrl ? (
                      <AvatarImage src={imageUrl} />
                    ) : (
                      <AvatarImage src="https://github.com/shadcn.png" />
                    )}
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar> */}
                          {/* <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar> */}
                        </div>
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        ))}
      </div>
    </>
  );
}
