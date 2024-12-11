import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { User } from "@/type/Users.type";
import { cn } from "@/lib/utils";
import { Invitation } from "@/type/Invitation.type";

interface Column {
  header: string;
  accessorKey: string;
}

interface TableTemplateProps {
  className?: string;
  columns: Column[];
  data: User[] | Invitation[] | any[];
  onDelete?: (id: string) => void;
}

/**
 * @param columns
 * @returns
 */

export function UserTableTemplate({
  className,
  columns,
  data,
  onDelete,
}: TableTemplateProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Table>
        <TableHeader className="bg-[#5E5E5E] text-white">
          <TableRow>
            {columns.map((column, index) => (
              <TableHead
                key={column.accessorKey}
                className={cn(
                  "p-4",
                  index === 0 && "rounded-tl-md",
                  index === columns.length - 1 && "rounded-tr-md"
                )}
              >
                {/* ヘッダーの内容 */}
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell
                  key={column.accessorKey}
                  className={cn(
                    "bg-white p-4",
                    colIndex === 0 && "rounded-bl-md",
                    colIndex === columns.length - 1 && "rounded-br-md"
                  )}
                >
                  {column.accessorKey === "actions" && onDelete ? (
                    <Button
                      onClick={() => onDelete(row.id)}
                      size="default"
                      className="bg-primary-red"
                    >
                      <X className="h-4 w-4" />
                      <span>DELETE</span>
                    </Button>
                  ) : (
                    row[column.accessorKey]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
