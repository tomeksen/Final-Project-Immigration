'use client'
import { CategoryManagerTable } from "@/components/dashboard/template-manager/category-list";

const TemplateCategoryPage = ({
  params,
}: {
  params: { applicationId: string }
}) => {
  const applicationId = params.applicationId;
  return (
    <div>
      <CategoryManagerTable CategoryId={applicationId} />
    </div>
  );
};

export default TemplateCategoryPage;