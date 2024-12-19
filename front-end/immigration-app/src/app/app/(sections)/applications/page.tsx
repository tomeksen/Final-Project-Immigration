import { ApplicationsTable } from "@/components/dashboard/applications/ApplicationsTable";
import { Application } from "@/type/Applications.type";
import { auth } from "@clerk/nextjs/server";

const ApplicationsPage =  async () => {
  const { userId, getToken } = await auth();

  const fetchApplications = async () => {
    try {
      const token = await getToken();
      const response = await fetch(
        `https://immigrationapi.tomytrt.workers.dev/api/applications/${userId}`,
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

  const applicationList : Application[] = await fetchApplications();
  return (
    <>
      <ApplicationsTable applications={applicationList}/>
    </>
  );
};

export default ApplicationsPage;
