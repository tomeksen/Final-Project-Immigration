import { AppSheet } from "@/components/AppSheet";
import { ApplicationsTable } from "@/components/dashboard/applications/ApplicationsTable";
import { TaskManager } from "@/components/dashboard/applications/TaskManager";
import { TaskList } from "@/components/TaskList";

const TestPage = () => {
  return (
    <>
      <div className="p-6">
        <ApplicationsTable />
      </div>

      <div className="p-6">
        <TaskManager />
      </div>
    </>
  );
};

export default TestPage;
