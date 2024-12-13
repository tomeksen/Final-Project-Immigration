'use client'
import { TaskManagerTable } from "@/components/dashboard/template-manager/task-list";

const TemplateTaskPage = ({
  params,
}: {
  params: { categoryId: string }
}) => {
  const categoryId = params.categoryId;
  return (
    <div>
      <TaskManagerTable CategoryId={categoryId} />
    </div>
  );
};

export default TemplateTaskPage;