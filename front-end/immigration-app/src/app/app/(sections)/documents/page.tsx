import {
  AppDocTableType,
  TableFilters,
} from "@/components/common/Table/TableFilters";
import { ApplicationsTable } from "@/components/dashboard/applications/ApplicationsTable";

const DocumentsPage = () => {
  const data = [
    {
      number: "001",
      name: "Maria_CICCC_ESL",
      date: "04 Apr 2023",
      type: "Student",
      progress: 100,
      status: "Completed",
    },
    {
      number: "002",
      name: "Maria_CICCC_UX/UI",
      date: "15 Nov 2023",
      type: "Student",
      progress: 100,
      status: "Rejected",
    },
    {
      number: "003",
      name: "Maria_CICCC_UX/UI_2",
      date: "08 Jul 2024",
      type: "Student",
      progress: 50,
      status: "Processing",
    },
    {
      number: "004",
      name: "Maria_Work Permit",
      date: "09 Jul 2024",
      type: "Work Permit",
      progress: 25,
      status: "On Hold",
    },
    {
      number: "005",
      name: "Juan_Visitor",
      date: "09 Jul 2024",
      type: "Visitor",
      progress: 25,
      status: "Processing",
    },
  ];
  return (
    <>
      <div className="w-full">
        <TableFilters title="Documents" data={data} />
      </div>
    </>
  );
};

export default DocumentsPage;
