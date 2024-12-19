'use client'
import { Category } from "@/type/Applications.type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';
import { useState } from "react";

type CategoryTableProps = {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
  onDeleteCategory: (categoryId: number) => void;
};

export function CategoryTable({ categories, onSelectCategory, onDeleteCategory }: CategoryTableProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleRowClick = (category: Category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <Table className="mt-10">
      <TableHeader className="bg-[#5E5E5E] text-primary-white">
        <TableRow>
          <TableHead>Category Name</TableHead>
          <TableHead>Order</TableHead>
          <TableHead>Actions</TableHead>
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
            <TableCell className="bg-white">
              <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); onDeleteCategory(category.id!); }}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}