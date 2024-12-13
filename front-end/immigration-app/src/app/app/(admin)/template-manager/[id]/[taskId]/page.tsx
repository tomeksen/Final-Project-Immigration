'use client'
import { TaskManagerTable } from "@/components/dashboard/template-manager/task-list";

const TemplateTaskPage = ({
  params,
}: {
  params: { taskId: string }
}) => {
  const categoryId = params.taskId;
  console.log(categoryId);
  return (
    <div>
      <TaskManagerTable CategoryId={categoryId} />
    </div>
  );
};

export default TemplateTaskPage;