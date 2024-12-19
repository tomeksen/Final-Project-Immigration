"use client";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import FilterTable from "@/components/common/Table/FilterTable";
import { useAuth } from "@clerk/nextjs";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableRow,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { apiClientFetch } from "@/config/apiClient";

import { cn } from "@/lib/utils";
import { Plus, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ERROR_MESSAGES } from "@/config/ErrorMessage";
import { Document, DocumentDetail } from "@/type/Document.type";
import PaymentError from "../payments/_components/paymentError";
import LottieLoading from "@/components/common/LottieLoading";

export type DocumentDetailType = {
  title: string;
  form: string;
  document: string;
  date: string;
  addDocument: string;
  status: "Incomplete" | "Completed";
};

export default function Page() {
  const { getToken, userId } = useAuth();
  const [documents, setDocuments] = useState<DocumentDetail[]>([]);
  const [error, setError] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  type ApplicationTitle = {
    id: string;
    title: string;
  };

  const formattedDocuments: (
    document: Document,
    applicationTitles: ApplicationTitle[]
  ) => DocumentDetail = (document, applicationTitles) => {
    const matchingTitle = applicationTitles.find(
      (title) => title.id === String(document.applicationTaskId)
    );

    return {
      form: matchingTitle ? matchingTitle.title : "No title",
      document: document.title || "",
      date: document.updatedAt || "",
      addDocument: document.isChecked === 0 ? "Replace" : "Add",
    };
  };

  console.log(userId);

  useEffect(() => {
    if (!userId) {
      console.warn("User ID is not available yet.");
      return;
    }

    const fetchDocuments = async () => {
      try {
        setIsLoading(true);
        const token = await getToken();

        if (!token) {
          setError(ERROR_MESSAGES.GENERAL.UNEXPECTED);
          setIsLoading(false);
          return;
        }

        // fetch Documents
        const fetchedDocuments: Document[] = await apiClientFetch(
          `documents/documentByUserId/${userId}`,
          token
        );

        // Filter only documents where applicationTaskId exists.
        const validDocuments = fetchedDocuments.filter(
          (doc) =>
            doc.applicationTaskId !== undefined &&
            doc.applicationTaskId !== null
        );

        // fetch applicationTasks
        const taskPromises = validDocuments.map((doc) =>
          apiClientFetch(
            `tasks/getByApplicationTaskId/${doc.applicationTaskId}`,
            token
          )
        );

        const fetchedTasksNested = await Promise.all(taskPromises);
        const fetchedTasks: ApplicationTitle[] = fetchedTasksNested
          .flat()
          .map((item: any) => ({
            id: String(item.id),
            title: item.title,
          }));

        // generate formatted document
        const formatted = fetchedDocuments.map((doc) =>
          formattedDocuments(doc, fetchedTasks)
        );

        setDocuments(formatted);
      } catch (e: any) {
        console.error("Error fetching documents:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, [userId, getToken]);

  if (isLoading) {
    return <LottieLoading />;
  }

  if (error) {
    return <PaymentError title="Documents" errorTitle={error} />;
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success(`Uploaded file: ${file.name}`);
    }
  };

  return (
    <div className="w-full p-4 container mx-auto flex flex-col gap-4">
      <HeaderBreadCrumbs rootHref="/documents" rootName="Documents" />

      <Table className={cn("bg-white rounded-md")}>
        <TableHeader>
          <TableRow className="text-xs sm:text-base p-4">
            <TableHead className="font-medium">FORM</TableHead>
            <TableHead className="font-medium">DOCUMENT</TableHead>
            <TableHead className="font-medium">DATE</TableHead>
            <TableHead className="font-medium">ADD DOCUMENT</TableHead>
            <TableHead className="font-medium">STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc, idx) => (
            <TableRow
              key={idx}
              className="hover:bg-gray-50 items-center text-sm sm:text-base"
            >
              <TableCell className="font-medium">{doc.form}</TableCell>
              <TableCell>{doc.document}</TableCell>
              <TableCell>{doc.date}</TableCell>
              <TableCell>
                {doc.addDocument === "Replace" ? (
                  <Label className="flex items-center justify-center gap-2 w-8 h-8 lg:w-[150px] bg-secondary-gray rounded-lg hover:bg-secondary-gray/80 text-black cursor-pointer">
                    <RotateCcw className="w-4 h-4" />
                    <span className="hidden lg:block">Replace</span>
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </Label>
                ) : (
                  <Label className="flex items-center justify-center gap-2 w-8 h-8 lg:w-[150px] p-0 bg-primary-red rounded-lg hover:bg-primary-red/80 text-white cursor-pointer">
                    <Plus className="w-4 h-4" />
                    <span className="hidden lg:flex">Add</span>
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </Label>
                )}
              </TableCell>
              <TableCell>
                <Checkbox className="flex items-center justify-center data-[state=checked]:border-none data-[state=checked]:bg-secondary-green h-6 w-6" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
