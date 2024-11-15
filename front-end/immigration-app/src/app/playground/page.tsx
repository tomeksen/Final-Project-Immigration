import { ApplicationsTable } from "@/components/applications/ApplicationsTable";
import { TaskList } from "@/components/TaskList";

const TestPage = () => {
  // const translations = useTranslations('HomePage');

  return (
    <>
      <div className="p-6">
        <TaskList />
      </div>

      {/* <div>
        <ApplicationsTable />
      </div> */}
    </>
  );
};

export default TestPage;
