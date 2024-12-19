'use client'

import { ApplicationManagerForm } from "@/components/dashboard/template-manager/form/applications-form";
import { CategoryCreatorManagerForm } from "@/components/dashboard/template-manager/creator/category-creator-form";
import { Category, Task, Application } from "@/type/Applications.type";
import { useState } from "react";
import { TaskCreatorManagerTable } from "@/components/dashboard/template-manager/creator/task-table";
import { TaskCreatorManagerForm } from "@/components/dashboard/template-manager/creator/task-creator-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CategoryTable } from "@/components/dashboard/template-manager/creator/category-table";

const steps = [
  { id: 1, name: 'Application' },
  { id: 2, name: 'Category' },
  { id: 3, name: 'Task' },
]

const TemplateApplicationsCreatorPage = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [applications, setApplication] = useState<Application | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const submitApplication = (application: Application) => {
    setApplication(application)
    setCurrentStep(2)
  }

  const submitCategory = (category: Category) => {
    setCategories([...categories, category])
  }

  const deleteCategory = (categoryId: number) => {
    setCategories(categories.filter(category => category.id !== categoryId))
  }

  const submitTask = (task: Task) => {
    setTasks([...tasks, task])
    setFilteredTasks([...tasks, task])
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
    setFilteredTasks(filteredTasks.filter(task => task.id !== taskId))
  }

  const moveToTaskForm = (category: Category) => {
    setFilteredTasks(tasks.filter(task => task.categoryId === category.order))
    setSelectedCategory(category)
    setCurrentStep(3)
  }

  const pushApplication = async (application: Application) => {
    try {
      const response = await fetch(
        `https://immigrationapi.tomytrt.workers.dev/api/applications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(application),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create application");
      }

      const result = await response.json();
      return result;
    } catch (e: any) {
      toast.error("Failed to create application");
      console.error("Failed to create application", e);
    } 
  }
  const pushCategories = async (category: Category) => {
    try {
      const response = await fetch(
        `https://immigrationapi.tomytrt.workers.dev/api/categories`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(category),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create categories");
      }

      const result = await response.json();
      return result;
    } catch (e: any) {
      toast.error("Failed to create categories");
      console.error("Failed to create categories", e);
    } 
  }

  const pushTasks = async (task: Task) => {
    try {
      const response = await fetch(
        `https://immigrationapi.tomytrt.workers.dev/api/tasks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create categories");
      }

      const result = await response.json();
      return result;
    } catch (e: any) {
      toast.error("Failed to create categories");
      console.error("Failed to create categories", e);
    } 
  }

  const submitCompleteApplication = async () => {
    if (!applications) {
      return;
    }
    const application = await pushApplication(applications)
    console.log(application)  
    categories.forEach(async (category) => {
      category.applicationId = application[0]?.id
      let categoryId = await pushCategories(category)
      console.log(categoryId)
      tasks.map(async (task) => {
        if (task.categoryId === category.order) {
          task.categoryId = categoryId[0].id
          const taskList = await pushTasks(task)
          console.log(taskList)
        }
      })
    })
    router.push(`/template-manager/${application[0]?.id}`)

  }
  

  return (
    <div>
      {currentStep === 1 &&(
        <div>
          <Button onClick={() => submitCompleteApplication()}>Submit Application</Button>
          <ApplicationManagerForm addApplication={submitApplication} application={applications} />
       </div>
      )
      }
      {currentStep === 2 && (
        <div className="flex">
          <div className="w-1/2">
            <Button className="mr-3" onClick={() => setCurrentStep(1)}>Back</Button>
            <Button onClick={() => submitCompleteApplication()}>Submit Application</Button>
            <CategoryTable categories={categories} onSelectCategory={moveToTaskForm} onDeleteCategory={deleteCategory}/>
          </div>
          <div className="w-1/2">
            <CategoryCreatorManagerForm applicationId={applications?.id?.toString() || "1"} addCategory={submitCategory} />
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex">
          <div className="w-1/2">
            <Button className="mr-3" onClick={() => setCurrentStep(2)}>Back</Button>
            <Button className="mr-9" onClick={() => setCurrentStep(1)}>Back to Application</Button>
            <Button variant={"outline"} onClick={() => submitCompleteApplication()}>Submit Application</Button>
            <TaskCreatorManagerTable taskList={filteredTasks} onDeleteTask={deleteTask} />
          </div>
          <div className="w-1/2">
            <TaskCreatorManagerForm categoryId={selectedCategory?.order?.toString() || "1"} addTask={submitTask} />
          </div>
        </div>
      )}
    </div>
  )
};

export default TemplateApplicationsCreatorPage;