import { CategoryManagerForm } from "@/components/dashboard/template-manager/form/category-form";
import { TaskManagerForm } from "@/components/dashboard/template-manager/form/task-form";
import { Category } from "@/type/Applications.type";
import { toast } from "sonner";

const TaskByCategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  
  return (
    <div>
        <TaskManagerForm categoryId={id}/>
    </div>
  );
};

export default TaskByCategoryPage;