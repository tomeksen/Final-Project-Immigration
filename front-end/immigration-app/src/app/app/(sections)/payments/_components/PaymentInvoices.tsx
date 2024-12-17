"use client";
import { ArrowRight, ChevronLeft, ChevronRight, Download } from "lucide-react";
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
import { PaymentFiltered, PaymentInvoiceType } from "@/type/Payment.type";
import { ERROR_MESSAGES } from "@/config/ErrorMessage";
import PaymentError from "./paymentError";

// TODO
// Separate to Props
// Invoices, the number of invoices,

type Props = {
  invoices: PaymentFiltered[];
};

export default function PaymentInvoices({ invoices }: Props) {
  // filter out the invoice data
  const newInvoices: PaymentInvoiceType[] = invoices.map((invoice) => ({
    invoiceId: invoice.invoiceId,
    invoiceName: invoice.title,
    status: invoice.isCompleted ? "Paid" : "Refund",
  }));

  const totalInvoices = invoices.length;
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
    window.open(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "_blank"
    );
  };

  if (!invoices || invoices.length === 0) {
    return <PaymentError title="Invoices" errorTitle="invoice" />;
  }

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
            {newInvoices.slice(startItem - 1, endItem).map((invoice) => (
              <TableRow key={invoice.invoiceId}>
                <TableCell className="font-medium text-primary-gray">
                  {invoice.invoiceId}
                </TableCell>
                <TableCell>{invoice.invoiceName}</TableCell>
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
                    Download
                    <Download className="ml-1 h-4 w-4" />
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
