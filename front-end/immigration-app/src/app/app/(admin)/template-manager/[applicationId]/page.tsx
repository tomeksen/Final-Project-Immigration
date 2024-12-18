import { CategoryManagerTable } from "@/components/dashboard/template-manager/category-list";
import { Category } from "@/type/Applications.type";
import { auth } from "@clerk/nextjs/server";

const TemplateCategoryPage = async ({
  params,
}: {
  params: Promise<{ applicationId: string }>
}) => {
  const applicationId = (await params).applicationId;
  const { getToken } = await auth();
  
    const fetchCategories = async () => {
      try {
        const token = await getToken();
        const response = await fetch(
          `https://immigrationapi.tomytrt.workers.dev/api/categories/${applicationId}`,
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

      const CategoryList : Category[] = await fetchCategories();
  return (
    <div>
    </div>
  );
};

export default TemplateCategoryPage;