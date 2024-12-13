'use client'
import { CategoryManagerTable } from "@/components/dashboard/template-manager/category-list";

const TemplateCategoryPage = ({
  params,
}: {
  params: { id: string }
}) => {
  const applicationId = params.id;
  console.log(applicationId);
  return (
    <div>
      <CategoryManagerTable CategoryId={applicationId} />
    </div>
  );
};

export default TemplateCategoryPage;