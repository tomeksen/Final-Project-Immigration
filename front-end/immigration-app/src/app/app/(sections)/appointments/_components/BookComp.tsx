import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import AppointmentDialog from "./AppointmentDialog";

// TODO
// "Choose your appointment section"
// Convert appointment into props

// "Time section"
// make TODAY and TOMORROW dynamically

type Props = {
  day: string;
  date: string;
  times: string[];
};

const BookComp = () => {
  const dayData: Props[] = [
    {
      day: "Thursday",
      date: "July 11",
      times: ["11:00 AM", "14:30 PM", "15:30 PM"],
    },
    {
      day: "Friday",
      date: "July 12",
      times: ["12:30 PM", "14:30 PM"],
    },
    {
      day: "Saturday",
      date: "July 13",
      times: ["12:00 PM", "14:30 PM", "16:30 PM"],
    },
    { day: "Sunday", date: "July 14", times: ["13:30 PM"] },
    {
      day: "Monday",
      date: "July 15",
      times: ["11:30 PM", "12:30 PM", "13:30 PM"],
    },
    {
      day: "Tuesday",
      date: "July 16",
      times: ["14:30 PM", "15:30 PM", "16:00 PM"],
    },
  ];

  return (
    <div className="flex flex-col gap-4 ">
      <Card className="p-6">
        <div className="rounded-lg bg-secondary-lightGray">
          <CardHeader>
            <CardTitle className="text-primary-red">
              Choose your Appointment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup defaultValue="consultation">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consultation" id="consultation" />
                    <Label htmlFor="consultation" className="font-semibold">
                      Immigration Consultation
                    </Label>
                  </div>
                  <div className="pl-6 text-foreground/90">
                    <p className="text-sm mb-2 font-semibold">
                      50 minutes @ CA$150.00
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Profile Analysis</li>
                      <li>• Eligibility Assessment</li>
                      <li>• Express Entry Points Simulation</li>
                      <li>• Information on Provincial Processes</li>
                      <li>• Define Visa Strategy(including visa refusal)</li>
                      <li>• Answer Questions about Immigration</li>
                      <li>
                        • Immigration Strategy Definition (Permanent Residence)
                      </li>
                      <li>• Personalized Immigration Plan</li>
                      <li>• 50-minute Consultation via Google Meets</li>
                      <li>
                        • C$150 Credit for Any Future Application (Permanent
                        Residence)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="zoom" id="zoom" />
                    <Label htmlFor="zoom" className="font-semibold">
                      Zoom Meeting
                    </Label>
                  </div>
                  <div className="pl-6 text-foreground/90">
                    <p className="text-sm mb-2 text-foreground font-semibold">
                      15 minutes @ Free
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Application Process Overview</li>
                      <li>• Application Form Assistance</li>
                      <li>• Fee Structure and Payment</li>
                      <li>• Interview Preparation</li>
                      <li>• Processing Times and Status Tracking</li>
                      <li>• Next Steps and Follow-UP</li>
                    </ul>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </div>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary-lightGray hover:bg-secondary-lightGray  border-none">
                {dayData.map((day, idx) => (
                  <TableHead key={day.date} className="text-center h-auto">
                    <div className="grid grid-rows-3 space-y-1 py-2">
                      <div className="text-primary-red text-sm">
                        {day.date === "July 11"
                          ? "TODAY"
                          : day.date === "July 12"
                          ? "TOMORROW"
                          : ""}
                      </div>
                      <div className="font-semibold text-foreground">
                        {day.day}
                      </div>
                      <div className="text-sm text-gray-600">{day.date}</div>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-0">
                {dayData.map((day, idx) => (
                  <TableCell key={`radio-${day.date}`} className="p-2">
                    <RadioGroup
                      defaultValue={idx === 0 ? day.times[1] : undefined}
                    >
                      <div className="grid grid-rows-3 gap-4">
                        {day.times.map((time) => (
                          <div
                            key={`${day.day}-${time}`}
                            className="flex items-center justify-center space-x-2"
                          >
                            <RadioGroupItem
                              value={time}
                              id={`${day.day}-${time}`}
                              className="border-primary-red text-primary-red focus:ring-primary-red"
                            />
                            <Label htmlFor={`${day.day}-${time}`}>{time}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>

          <div className="flex justify-between items-center mt-4">
            <Button variant="link" className="text-muted-foreground">
              View More Times →
            </Button>
            <AppointmentDialog />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookComp;
