import { DialogTitleProps } from "@radix-ui/react-dialog";

export type Document = {
  id: number;
  title: string;
  documentTypeId?: number;
  documentFile?: Blob;
  applicationTaskId?: number;
  userId?: string;
  expirationDate?: Date;
  isChecked: number;
  createdAt: string;
  updatedAt: string;
};

export type DocumentDetail = {
  form: string;
  document: string;
  date: string;
  addDocument: "Replace" | "Add";
};

export type DocumentType = {
  id: number;
  typeName: string;
  hasExpiration: boolean;
};

export type DocumentFilteredType = {
  id: string;
  number: string;
  name: string;
  date: string;
  type: "Student" | "Visa" | "Work Permit";
  progress: number;
  status: "Completed" | "Rejected" | "Processing" | "On Hold";
};
