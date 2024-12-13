'use client'

import { useEffect, useState } from "react";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

type Category = {
  id: string;
  application_id: string;
  name: string;
  order: number;
  status: string;
};

const categories: Category[] = [
  {
    id: "1",
    application_id: "1",
    name: "Beginning",
    order: 1,
    status: "Completed",
  },
  {
    id: "2",
    application_id: "1",
    name: "Second",
    order: 2,
    status: "Processing",
  },
];

type CategoryTableProps = {
  CategoryId: string;
  appearance?: { baseTheme: any };
  onRowClick?: (category: Category) => void;
};

export function CategoryManagerTable({ CategoryId }: CategoryTableProps) {
    const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
    useEffect(() => {
        if(selectedCategory){
            router.push(`/template-manager/${CategoryId}/${selectedCategory.id}`);
        }
    },[selectedCategory]);  
    return (
    <div className="p-4 space-y-4">
      <HeaderBreadCrumbs rootName={"Applications"}  breadName={CategoryId}/>

      <Table>
        <TableHeader className="bg-[#5E5E5E] text-primary-white ">
          {/* Give it Link */}
          <TableRow className="">
            <TableHead className="rounded-tl-md">Number</TableHead>
            <TableHead>title</TableHead>
            <TableHead>Order</TableHead>
            <TableHead className="rounded-tr-md">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border">
          {categories.map((category, index) => (
            // jump to tasks
            // <Link href={`/applications/${app.id}`} key={app.id}>
            <TableRow
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className="cursor-pointer hover:bg-primary-gray"
            >
              <TableCell className="last: rounded-bl-md bg-white">
                {category.id}
              </TableCell>
              <TableCell className="bg-white">{category.name}</TableCell>
              <TableCell className="bg-white">{category.order}</TableCell>

              <TableCell className="last: rounded-br-md bg-white">
                <Badge
                  variant={
                    category.status === "Completed"
                      ? "default"
                      : category.status === "Rejected"
                      ? "destructive"
                      : category.status === "Processing"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {category.status}
                </Badge>
              </TableCell>
            </TableRow>
            // </Link>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}