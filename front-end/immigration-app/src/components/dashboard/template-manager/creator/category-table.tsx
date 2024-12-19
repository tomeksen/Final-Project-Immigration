'use client'
import { Category } from "@/type/Applications.type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

type CategoryTableProps = {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
};

export function CategoryTable({ categories, onSelectCategory }: CategoryTableProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleRowClick = (category: Category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <Table className=" mt-10">
      <TableHeader className="bg-[#5E5E5E] text-primary-white">
        <TableRow>
          <TableHead>Category Name</TableHead>
          <TableHead>Order</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border">
        {categories.map((category) => (
          <TableRow
            key={category.id}
            className={`cursor-pointer hover:bg-primary-gray ${selectedCategory?.id === category.id ? 'bg-primary-gray' : ''}`}
            onClick={() => handleRowClick(category)}
          >
            <TableCell className="bg-white">{category.categoryName}</TableCell>
            <TableCell className="bg-white">{category.order}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}