import { TaskManagerTable } from "@/components/dashboard/template-manager/task-list";
import { Task } from "@/type/Applications.type";
import { auth } from "@clerk/nextjs/server";

const TemplateTaskPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>
}) => {
  const categoryId = (await params).categoryId;
    const {  getToken } = await auth();

  const fetchTasks = async () => {
    try {
      const token = await getToken();
      const response = await fetch(
        `https://immigrationapi.tomytrt.workers.dev/api/tasks/${categoryId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch applications");
      }

      const data = await response.json();
      return data;
    } catch (e: any) {
      throw new Error("Failed to fetch applications");
    }
  };
    const TaskList : Task[] = await fetchTasks();
  
  return (
    <div>
      <TaskManagerTable CategoryId={categoryId} taskList={TaskList}/>
    </div>
  );
};

export default TemplateTaskPage;