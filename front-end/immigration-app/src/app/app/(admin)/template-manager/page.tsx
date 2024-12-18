
import { ApplicationsManagerTable } from "@/components/dashboard/template-manager/applications-list";
import { Application } from "@/type/Applications.type";
import { auth } from "@clerk/nextjs/server";

const TemplateApplicationsPage = async () => {
    const { getToken } = await auth();
  
    const fetchApplications = async () => {
      try {
        const token = await getToken();
        const response = await fetch(
          `https://immigrationapi.tomytrt.workers.dev/api/applications`,
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
            <div>
              <ApplicationsManagerTable applications={applicationList}/>
            </div>
    )
  };
  
export default TemplateApplicationsPage;