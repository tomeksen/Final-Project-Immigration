"use client";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import FilterTable from "@/components/common/Table/FilterTable";
import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";
import { Plus, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export type DocumentDetailType = {
  title: string;
  form: string;
  document: string;
  date: string;
  addDocument: string;
  status: "Incomplete" | "Completed";
};

export default function Page({
  params,
  className,
}: {
  params: { id: string };
  className: string;
}) {
  const documents: DocumentDetailType[] = [
    {
      title: "Maria_CICCC_ESL",
      form: "(PAL or TAL)",
      document:
        "Provincial attestation letter or territorial attestation letter",
      date: "10 July 2024",
      addDocument: "Replace",
      status: "Completed",
    },
    {
      title: "Maria_CICCC_UX/UI",
      form: "00001",
      document: "Passport or travel document",
      date: "21 July 2024",
      addDocument: "Add",
      status: "Incomplete",
    },
    {
      title: "Maria_CICCC_UX/UI_2",
      form: "00002",
      document: "Biometrics (Fingerprints)",
      date: "10 June 2024",
      addDocument: "Replace",
      status: "Completed",
    },
    {
      title: "Maria_Work Permit",
      form: "00003",
      document: "Two visa application photograph",
      date: "19 May 2024",
      addDocument: "Replace",
      status: "Completed",
    },
    {
      title: "Maria_Work Permit",
      form: "00004",
      document: "Letter of acceptance from the school",
      date: "10 June 2024",
      addDocument: "Add",
      status: "Incomplete",
    },
    {
      title: "Juan_Visitor",
      form: "00005",
      document: "Proof of financial support",
      date: "8 June 2024",
      addDocument: "Add",
      status: "Incomplete",
    },
  ];

  const { id } = params;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success(`Uploaded file: ${file.name}`);
    }
  };

  return (
    <div className="w-full p-4 container mx-auto flex flex-col gap-4">
      <HeaderBreadCrumbs
        rootHref="/documents"
        rootName="Documents"
        //  ⭐️hard-coded
        breadName={documents[Number(id)]?.title || "Document Details"}
      />
      <FilterTable />

      <Table className={cn(className)}>
        <TableHeader>
          <TableRow className="text-xs sm:text-base">
            <TableHead className="font-medium">FORM</TableHead>
            <TableHead className="font-medium">DOCUMENT</TableHead>
            <TableHead className="font-medium">DATE</TableHead>
            <TableHead className="font-medium">ADD DOCUMENT</TableHead>
            <TableHead className="font-medium">STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow
              key={doc.form}
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
