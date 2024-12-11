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

/**
 * UserTableTemplate Component
 *
 * @param {string} className - Additional CSS classes to style the component.
 * @param {Column[]} columns - Array of column definitions. Each column contains:
 *  - `header`: The display name of the column.
 *  - `accessorKey`: The key to access the data for this column from the `data` array.
 * @param {User[] | Invitation[] | any[]} data - Array of data to display in the table. Each object should have keys corresponding to `accessorKey` in the `columns`.
 * @param {Function} [onDelete] - Optional callback function triggered when the delete button is clicked. It receives the `id` of the row to delete.
 *
 * @returns {JSX.Element} The rendered table component.
 *
 * @example
 * const columns = [
 *   { header: "Name", accessorKey: "name" },
 *   { header: "Email", accessorKey: "email" },
 *   { header: "Actions", accessorKey: "actions" }
 * ];
 *
 * const data = [
 *   { id: 1, name: "John Doe", email: "john.doe@example.com" },
 *   { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }
 * ];
 *
 * const handleDelete = (id) => {
 *   console.log(`Delete user with ID: ${id}`);
 * };
 *
 * <UserTableTemplate
 *   className="my-custom-class"
 *   columns={columns}
 *   data={data}
 *   onDelete={handleDelete}
 * />
 */

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

export function UserTableTemplate({
  className,
  columns,
  data,
  onDelete,
}: TableTemplateProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Table>
        <TableHeader className="bg-primary-gray text-white">
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
                      className="bg-primary-red hover:bg-primary-red/80"
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
