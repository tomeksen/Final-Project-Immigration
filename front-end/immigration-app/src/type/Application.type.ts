export type Application = {
  id: number;
  userId: string;
  applicationName: string;
  applicationDate: string;
  applicationType: string;
  applicationStatus: string;
};

export type Category = {
  id: number;
  applicationId: number;
  categoryName: string;
  order: number;
};

export type Task = {
  id: number;
  categoryId: number;
  title: string;
  isCompleted: boolean;
  isRevised: boolean;
  dueDate: Date;
  description: string;
  steps: { [key: string]: string };
  instructions: { [key: string]: string };
  notes: string;
};

export type TaskComment = {
  id?: number;
  taskId: number;
  isRead: boolean;
  commentContent: string;
  userId: string;
};
