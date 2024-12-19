import { TaskManagerForm } from "@/components/dashboard/template-manager/form/task-form";
import { auth } from "@clerk/nextjs/server";

const TemplateTaskPage = async ({
  params,
}: {
  params: Promise<{ applicationId: string; categoryId: string; taskId: string }>;
}) => {
  const { applicationId, categoryId, taskId } = (await params);

  return (
    <div>
      <TaskManagerForm
        categoryId={categoryId}
        applicationId={applicationId}
        taskId={taskId}
      />
    </div>
  );
};

export default TemplateTaskPage;