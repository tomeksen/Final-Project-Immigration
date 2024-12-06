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

export default function AppointmentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-red hover:bg-primary-red/80">
          Make Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <div className="grid gap-6 md:grid-cols-11">
          {/* Payment Method */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <DialogTitle className="mb-4">Your Information</DialogTitle>

              <div className="space-y-4">
                <Label>Payment Method</Label>
                <RadioGroup defaultValue="card" className="flex gap-2">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="Visa" id="card" />
                    <Label htmlFor="card">Visa</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="Paypal" id="bank" />
                    <Label htmlFor="bank">Paypal</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Maria" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Lopez" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emailAddress">Email Address</Label>
                <Input id="emailAddress" placeholder="maria_lopez@gmail.com" />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="save-card" />
                <Label htmlFor="save-card">Save card details</Label>
              </div>
            </div>
          </div>

          {/* Amount */}
          <div className="md:col-span-6 space-y-6">
            <DialogTitle>Summary</DialogTitle>

            <div className="rounded-lg border">
              <Table className="table-fixed">
                <TableBody>
                  <TableRow className="w-full">
                    <TableCell className="w-full">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center space-x-2 mb-4">
                          <File className="w-4 h-4" />
                          <p className="text-sm font-semibold">
                            Appointment Summary
                          </p>
                        </div>
                        <div className="flex flex-col items-start  w-full text-primary-gray">
                          <p className="text-sm">Zoom meeting</p>
                          <p className="text-sm">
                            Date: Thursday 11 July, 2024
                          </p>
                          <p className="text-sm">Time: 14:30PM</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="flex items-center justify-between">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge className="w-full rounded-full bg-secondary-green text-xs px-2 text-white">
                          Larissa Casteller
                        </Badge>
                        <span>Immigration Consulting</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">150.00</TableCell>
                  </TableRow>
                  <TableRow className="flex items-center justify-end">
                    <TableCell className="font-medium">Total Price:</TableCell>
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
