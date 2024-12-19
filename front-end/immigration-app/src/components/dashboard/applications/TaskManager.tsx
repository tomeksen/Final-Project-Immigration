"use client";

import { AppSheet } from "@/components/AppSheet";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { TaskList } from "@/components/TaskList";
import React, { useEffect, useState } from "react";
import { MobileTaskList } from "@/components/MobileTaskList";
import { Category, Task, TaskComment } from "@/type/Applications.type";

type TaskManagerProps = {
  onClose: () => void;
  applicationId: number;
};

export function TaskManager({ onClose, applicationId }: TaskManagerProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [comments, setComments] = useState<Record<number, TaskComment[]>>({});

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

  useEffect(() => {
    const fetchTasksAndComments = async () => {
      try {
        const tasksData: Task[] = [];
        const commentsData: Record<number, TaskComment[]> = {};

        for (const category of categories) {
          const taskResponse = await fetch(
            `https://immigrationapi.tomytrt.workers.dev/api/tasks/${category.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "category/json",
              },
            }
          );

          if (!taskResponse.ok) {
            throw new Error("Failed to fetch applications");
          }
          const data: Task[] = await taskResponse.json();

          tasksData.push(...data);

          for (const task of tasksData) {
            const commentResponse = await fetch(
              `https://immigrationapi.tomytrt.workers.dev/api/taskComments/${task.id}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (commentResponse.ok) {
              const comments: TaskComment[] = await commentResponse.json();
              if (task.id !== undefined) {
                commentsData[task.id] = comments;
              }
            } else {
              if (task.id !== undefined) {
                commentsData[task.id] = [];
              }
            }
          }
        }

        setTasks(tasksData);
        setComments(commentsData);
      } catch (error) {
        throw new Error("Failed to fetch tasks and comments:");
      }
    };

    fetchTasksAndComments();
  }, [categories]);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <section className="h-full container flex flex-col p-4 w-full">
      <HeaderBreadCrumbs rootName="Applications" breadName={"Task Details"} />

      <div className="hidden md:flex flex-col">
        <TaskList
          onTaskClick={handleTaskClick}
          tasks={tasks}
          categories={categories}
          comments={comments}
        />
      </div>

      <div className="flex md:hidden flex-col">
        <MobileTaskList
          onTaskClick={handleTaskClick}
          tasks={tasks}
          categories={categories}
          comments={comments}
        />
      </div>

      {selectedTask && (
        <AppSheet
          task={selectedTask}
          comments={selectedTask.id !== undefined ? comments[selectedTask.id] : []}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </section>
  );
}
