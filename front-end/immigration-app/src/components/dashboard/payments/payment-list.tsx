"use client";

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
import { Payment } from "@/type/Payment.type";

type PaymentTableProps = {
    payments?: Payment[];
  };

export function PaymentManagerTable({payments}: PaymentTableProps) {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  if (!payments) { 
    payments = [];
  }

    useEffect(() => {
        if(selectedPayment){
            router.push(`/payments/${selectedPayment.id}`);
        }
    },[selectedPayment]);

  return (
    <div className="p-4 space-y-4">

      <HeaderBreadCrumbs rootName={"Payments"} />
      <Button  asChild>
        <Link href="/payments/creator">Create New Payment</Link>
      </Button>
      <Table>
      <TableHeader className="bg-[#5E5E5E] text-primary-white ">
        {/* Give it Link */}
        <TableRow className="">
          <TableHead className="rounded-tl-md">Number</TableHead>
          <TableHead>Application Id </TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="rounded-tr-md">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border">
        {payments.map((payment, index) => (
          <TableRow
            key={payment.id}
            onClick={() => setSelectedPayment(payment)}
            className="cursor-pointer hover:bg-primary-gray"
          >
            <TableCell className="last: rounded-bl-md bg-white">
              {index + 1}
            </TableCell>
            <TableCell className="bg-white">{payment.applicationId}</TableCell>
            <TableCell className="bg-white">{payment.title}</TableCell>
            <TableCell className="bg-white">{payment.isCompleted}</TableCell>
            <TableCell className="last: rounded-br-md bg-white">
              <Badge
                variant={
                    payment.isCompleted === true
                    ? "default"
                    : payment.isCompleted === false
                    ? "destructive"
                    : "outline"
                }
              >
                {payment.isCompleted? "Completed" : "Pending"}
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
