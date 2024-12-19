'use client'

import { ApplicationManagerForm } from "@/components/dashboard/template-manager/form/applications-form";
import { CategoryManagerForm } from "@/components/dashboard/template-manager/form/category-form";
import { TaskManagerForm } from "@/components/dashboard/template-manager/form/task-form";
import { Category, Task, Application } from "@/type/Applications.type";
import { useEffect, useState } from "react";

const steps = [
  { id: 1, name: 'Application' },
  { id: 2, name: 'Category' },
  { id: 3, name: 'Task' },
]

const TemplateApplicationsCreatorPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [applications, setApplication] = useState<Application | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const submitApplication = (application: Application) => {
    setApplication(application)
    setCurrentStep(2)
  }

    return (
            <div>
              { currentStep === 1 && <ApplicationManagerForm addApplication={submitApplication} application={applications}/>}
              { currentStep === 2 && <CategoryManagerForm applicationId="1"/>}
              { currentStep === 3 && <TaskManagerForm />}
            </div>
    )
  };
  
export default TemplateApplicationsCreatorPage;