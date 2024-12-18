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
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Category } from "@/type/Applications.type";

type CategoryTableProps = {
  categories: Category[];
  applicationId: string;
};

export function CategoryManagerTable({ categories,applicationId }: CategoryTableProps) {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
      null
      );  

    useEffect(() => {
        if(selectedCategory){
            router.push(`/template-manager/${applicationId}/${selectedCategory.id}`);
        }
    },[selectedCategory]);  

    return (
    <div className="p-4 space-y-4">
      <HeaderBreadCrumbs rootName={"Applications"} rootHref={`/template-manager`} breadName={`Category > ${applicationId}`}/>
      <Button  asChild>
        <Link href="/template-manager/creator">Create New Category</Link>
      </Button>
      <Table>
        <TableHeader className="bg-[#5E5E5E] text-primary-white ">
          {/* Give it Link */}
          <TableRow className="">
            <TableHead className="rounded-tl-md">Number</TableHead>
            <TableHead>title</TableHead>
            <TableHead>Order</TableHead>
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
              <TableCell className="bg-white">{category.categoryName}</TableCell>
              <TableCell className="bg-white">{category.order}</TableCell>

            </TableRow>
            // </Link>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}