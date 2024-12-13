"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// TODO
// Separate to Props
// Invoices, the number of invoices,

export default function PaymentInvoices() {
  // props ------------------------------------------------------------------------
  const invoices = [
    { id: "INV-00301", name: "Maria_CICCC_UX/UI_2", status: "Paid" },
    { id: "INV-00203", name: "Maria_CICCC_UX/UI", status: "Refunded" },
    { id: "INV-00202", name: "Maria_CICCC_UX/UI", status: "Paid" },
    { id: "INV-00201", name: "Maria_CICCC_UX/UI", status: "Paid" },
    { id: "INV-00106", name: "Maria_CICCC_ESL", status: "Paid" },
    { id: "INV-00107", name: "Maria_CICCC_ESL", status: "Paid" },
    { id: "INV-00108", name: "Maria_CICCC_ESL", status: "Paid" },
    { id: "INV-00109", name: "Maria_CICCC_ESL", status: "Paid" },
    { id: "INV-00110", name: "Maria_CICCC_ESL", status: "Paid" },
    { id: "INV-00111", name: "Maria_CICCC_ESL", status: "Paid" },
    { id: "INV-00112", name: "Maria_CICCC_ESL", status: "Paid" },
    { id: "INV-00113", name: "Maria_CICCC_ESL", status: "Paid" },
    { id: "INV-00114", name: "Maria_CICCC_ESL", status: "Paid" },
  ];

  const totalInvoices = invoices.length;
  // ------------------------------------------------------------------------

  const itemsPerPage = 7;
  const totalPage = Math.ceil(totalInvoices / itemsPerPage);
  const [invoicePage, setInvoicePage] = useState<number>(1);

  const startItem = (invoicePage - 1) * itemsPerPage + 1;
  const endItem = Math.min(invoicePage * itemsPerPage, totalInvoices);

  const incrementPage = () => {
    if (invoicePage < totalPage) {
      setInvoicePage((prev) => prev + 1);
    }
  };
  const decrementPage = () => {
    if (invoicePage > 1) {
      setInvoicePage((prev) => prev - 1);
    }
  };

  const downloadPDF = () => {
    window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <p className="text-sm text-primary-gray">
          This data is reported once at 0700hrs local time every day
        </p>
      </CardHeader>
      <CardContent className="flex flex-col">
        <Table>
          <TableBody>
            {invoices.slice(startItem - 1, endItem).map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium text-primary-gray">
                  {invoice.id}
                </TableCell>
                <TableCell>{invoice.name}</TableCell>
                <TableCell>
                  <span
                    className={
                      invoice.status === "Paid"
                        ? "text-secondary-green"
                        : "text-primary-gray"
                    }
                  >
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    className="text-primary-red hover:text-primary-red hover:primary-red/50"
                    onClick={downloadPDF}
                  >
                    Label
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-start gap-2 mt-4 text-sm text-muted-foreground">
          <div className="flex">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={decrementPage}
              disabled={invoicePage <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={incrementPage}
              disabled={invoicePage >= totalPage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div>{`Showing ${startItem}-${endItem} of ${totalInvoices}`}</div>
        </div>
      </CardContent>
    </Card>
  );
}
