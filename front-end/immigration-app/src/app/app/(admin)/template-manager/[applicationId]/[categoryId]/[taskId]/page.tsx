import { TaskManagerTable } from "@/components/dashboard/template-manager/task-list";
import { Task } from "@/type/Applications.type";
import { auth } from "@clerk/nextjs/server";

const TemplateTaskPage = async ({
  params,
}: {
  params: Promise<{ taskId: string }>
}) => {
  const taskId = (await params).taskId;
    const {  getToken } = await auth();

  const fetchTaskById = async () => {
    try {
      const token = await getToken();
      const response = await fetch(
        `https://immigrationapi.tomytrt.workers.dev/api/tasks/getTasksById/${taskId}`,
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
    const TaskList : Task[] = await fetchTaskById();
  
  return (
    <div>
      
    </div>
  );
};

export default TemplateTaskPage;