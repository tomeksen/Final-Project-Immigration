import { CategoryManagerForm } from "@/components/dashboard/template-manager/form/category-form";
import { Category } from "@/type/Applications.type";
import { toast } from "sonner";

const CategoryByApplicationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  
  return (
    <div>
        <CategoryManagerForm applicationId={id}/>
    </div>
  );
};

export default CategoryByApplicationPage;