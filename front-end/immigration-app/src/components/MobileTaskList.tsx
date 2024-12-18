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
import { IoIosArrowDown } from "react-icons/io";
import { currentUser } from "@clerk/nextjs/server";
import { getUserImage } from "./dashboard/applications/getUserImage";
import { Category, Task, TaskComment } from "@/type/Application.type";

type TaskProps = {
  tasks: Task[];
  appearance?: { baseTheme: any };
  categories: Category[];
  comments: Record<number, TaskComment[]>;
  onTaskClick: (task: Task) => void;
};

export function MobileTaskList({
  tasks,
  onTaskClick,
  categories,
  comments,
}: TaskProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<
    Record<number, boolean>
  >({});
  // const [imageUrl, setImageUrl] = useState<string | null>();

  useEffect(() => {
    const initialState: Record<number, boolean> = {};
    categories.forEach((category, index) => {
      initialState[category.id] = index === 0;
    });
    setExpandedCategories(initialState);
  }, [categories]);

  // const handleToggle = () => {
  //   setIsExpanded((prev) => !prev);
  // };

  const handleToggle = (categoryId: number) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // useEffect(() => {
  //   async function fetchImage() {
  //     const url = await getUserImage();
  //     setImageUrl(url);
  //   }
  //   fetchImage();
  // }, []);

  return (
    <>
      {categories.map((category) => (
        <Table key={category.id} className="w-72">
          <TableHeader className="bg-[#5E5E5E] text-primary-white">
            <TableRow className="">
              <TableHead
                className={`rounded-md cursor-pointer p-2 text-center ${
                  isExpanded ? "bg-gray-700" : ""
                }`}
                // onClick={handleToggle}
                onClick={() => handleToggle(category.id)}
              >
                <div className="flex justify-between px-4">
                  <p>{category.categoryName}</p>
                  <IoIosArrowDown className="text-primary-white" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          {expandedCategories[category.id] && (
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
                      <TableCell className="p-6">
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
                              {comments[task.id]?.length || 0}
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

                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          )}
        </Table>
      ))}
    </>
  );
}
