import React, { useState } from "react";
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
import { IoIosArrowDown } from "react-icons/io";

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
  tasks: Task[];
  appearance?: { baseTheme: any };
  onTaskClick: (task: Task) => void;
};

export function MobileTaskList({ tasks, onTaskClick }: TaskProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <Table className="w-72">
        <TableHeader className="bg-[#5E5E5E] text-primary-white">
          <TableRow className="">
            <TableHead
              className={`rounded-md cursor-pointer p-2 text-center ${
                isExpanded ? "bg-gray-700" : ""
              }`}
              onClick={handleToggle}
            >
              <div className="flex justify-between px-4">
                <p>Getting start</p>
                <IoIosArrowDown className="text-primary-white" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        {isExpanded && (
          <TableBody>
            {/* Count is_completed === true, and divide it by tasks.length */}
            <TableRow>
              <TableCell>
                <Progress value={tasks.length} className="w-[100px] " />
              </TableCell>
            </TableRow>

            {tasks.map((task) => (
              <TableRow key={task.id} onClick={() => onTaskClick(task)}>
                <TableCell className="p-6">
                  <div className="flex items-center leading-none space-x-2">
                    {task.is_completed === true ? (
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
                      <p className="mr-6">1</p>
                      <GoPaperclip className="mr-3" />
                      <p className="mr-6">0</p>
                    </div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </>
  );
}
