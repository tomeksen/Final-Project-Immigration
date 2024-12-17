"use client";

import { AppSheet } from "@/components/AppSheet";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { TaskList } from "@/components/TaskList";
import React, { useEffect, useState } from "react";
import { MobileTaskList } from "@/components/MobileTaskList";
import { Category, Task } from "@/type/Applications.type";

type TaskManagerProps = {
  onClose: () => void;
  applicationId: number;
};

export function TaskManager({ onClose, applicationId }: TaskManagerProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // 1 fetch categories based on application_id
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `https://immigrationapi.tomytrt.workers.dev/api/categories/${applicationId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "category/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }

        const data = await response.json();
        await data.sort((a: Category, b: Category) => a.order - b.order);
        setCategories(data);
      } catch (e: any) {
        throw new Error("Failed to fetch applications");
      }
    };

    fetchCategory();
  }, [applicationId]);

  // 2 fetch tasks based on category_id and pass it to TaskLink
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData: Task[] = [];
        for (const category of categories) {
          const response = await fetch(
            `https://immigrationapi.tomytrt.workers.dev/api/tasks/${category.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "category/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch applications");
          }
          const data: Task[] = await response.json();

          tasksData.push(...data);
        }

        setTasks(tasksData);
      } catch (error) {
        throw new Error("Failed to fetch applications");
      }
    };

    fetchTasks();
  }, [categories]);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <section className="h-full container mx-auto flex flex-col p-3 w-full">
      <HeaderBreadCrumbs rootName="Applications" breadName={"Task Details"} />

      <div className="hidden md:flex flex-col">
        <TaskList onTaskClick={handleTaskClick} tasks={tasks} categories={categories}/>
      </div>

      <div className="flex md:hidden flex-col">
        <MobileTaskList onTaskClick={handleTaskClick} tasks={tasks} />
      </div>

      {selectedTask && (
        <AppSheet task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </section>
  );
}
