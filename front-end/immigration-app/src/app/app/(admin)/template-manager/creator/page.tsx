
type Application = {
    id: number;
    user_id: string;
    name: string;
    date: string;
    type: string;
    progress: number;
    status: string;
  };

  type Category = {
    id: string;
    application_id: string;
    name: string;
    order: number;
    status: string;
  };

   type Task = {
    id: string;
    category_id: string;
    comment_id: string;
    service_connection_id: string;
    title: string;
    is_completed: boolean;
    dueDate: Date;
    description: string;
    steps: string;
    instruction: string;
    notes: string;
  };

const TemplateApplicationsCreatorPage = () => {
    return (
            <div>
                
            </div>
    )
  };
  
export default TemplateApplicationsCreatorPage;