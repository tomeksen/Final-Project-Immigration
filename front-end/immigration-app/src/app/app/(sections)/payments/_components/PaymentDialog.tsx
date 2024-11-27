"use client";

import { File } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DialogTrigger } from "@radix-ui/react-dialog";

export default function PaymentDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="absolute bottom-0 right-0 z-50 bg-primary-red text-white p-2 w-full rounded-none rounded-b-md">
          Make Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <div className="grid gap-6 md:grid-cols-11">
          {/* Payment Method */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <DialogTitle className="mb-4">Payment Method</DialogTitle>

              <div className="space-y-4">
                <Label>Pay With:</Label>
                <RadioGroup defaultValue="card" className="flex gap-2">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Card</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">Bank Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">Paypal</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="wise" id="wise" />
                    <Label htmlFor="wise">Wise</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name on Card</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="save-card" />
                <Label htmlFor="save-card">Save card details</Label>
              </div>
            </div>
          </div>

          {/* Amount */}
          <div className="md:col-span-6 space-y-6">
            <DialogTitle>Amount</DialogTitle>

            <div className="rounded-lg border">
              <Table className="table-fixed">
                <TableBody>
                  <TableRow className="w-full">
                    <TableCell className="w-full">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center space-x-2">
                          <File className="w-4 h-4" />
                          <p className="text-sm">Total Payment</p>
                        </div>
                        <div className="flex items-center justify-between w-full text-primary-gray">
                          <p className="text-sm">Summary</p>
                          <p className="text-sm">Price</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="flex items-center justify-between">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge className="w-full rounded-full bg-primary-gray px-2 text-white">
                          CICCC_UX/UI_2
                        </Badge>
                        <span>School Enrollment Fee</span>
                        <span className="text-muted-foreground">(x1)</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">150.00</TableCell>
                  </TableRow>
                  <TableRow className="flex items-center justify-between">
                    <TableCell className="font-medium">Total:</TableCell>
                    <TableCell className="text-right text-lg font-bold text-primary-red">
                      CAD 150.00
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <Button className="w-full bg-primary-red hover:bg-primary-red/80">
              Label
            </Button>
            <p className="text-center text-muted-foreground text-xs">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
