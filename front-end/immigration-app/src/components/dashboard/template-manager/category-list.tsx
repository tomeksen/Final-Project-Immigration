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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

type Category = {
  id: string;
  application_id: string;
  categoryName: string;
  order: number;
};

type CategoryTableProps = {
  CategoryId: string;
  appearance?: { baseTheme: any };
  onRowClick?: (category: Category) => void;
};

export function CategoryManagerTable({ CategoryId }: CategoryTableProps) {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
      null
      );

  useEffect(() => {
    const fetchApplications = async () => {
      const { getToken } = useAuth();
      try {
        const token = await getToken();
        const response = await fetch(
          `https://immigrationapi.tomytrt.workers.dev/api/categories/${CategoryId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }

        const data = await response.json();
        console.log(data);
        setCategories(data);
      } catch (e: any) {
        throw new Error("Failed to fetch applications");
      }
    };

    fetchApplications();
  }, []);

    useEffect(() => {
        if(selectedCategory){
            router.push(`/template-manager/${CategoryId}/${selectedCategory.id}`);
        }
    },[selectedCategory]);  
    return (
    <div className="p-4 space-y-4">
      <HeaderBreadCrumbs rootName={"Applications"} rootHref={`/template-manager`} breadName={`Category > ${CategoryId}`}/>
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