"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RotateCcw } from "lucide-react";

type AppearanceType = {
  baseTheme: any;
};

type FilterProps = {
  sortBy: string;
  visaType: string;
  status: string;
  setSortBy: (value: string) => void;
  setVisaType: (value: string) => void;
  setStatus: (value: string) => void;
  resetFilters: () => void;
  appearance?: AppearanceType;
};

export default function Filters({
  sortBy,
  visaType,
  status,
  setSortBy,
  setVisaType,
  setStatus,
  resetFilters,
  appearance,
}: FilterProps) {
  return (
    <div className="flex items-center gap-1 bg-white rounded-lg p-2 max-w-4xl mb-4">
      <h2 className="px-1 w-[180px] text-sm hidden md:table-cell">Filter by</h2>
      <div className="self-stretch border-l border-gray-300 hidden md:table-cell" />

      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[180px] rounded-none mr-1 pl-4">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {/* <SelectItem value="date">Date: First to Last</SelectItem>
          <SelectItem value="date-last">Date: Last to First</SelectItem>
          <SelectItem value="progress">Progress: Low to High</SelectItem>
          <SelectItem value="progress-hl">Progress: Hight to Low</SelectItem> */}
          <SelectItem value="Student">Student Visa</SelectItem>
          <SelectItem value="Work Permit">Work Permit</SelectItem>
          <SelectItem value="Visitor">Visitor</SelectItem>
          <SelectItem value="name">A-Z</SelectItem>
        </SelectContent>
      </Select>
      <div className="self-stretch border-l border-gray-300" />

      {/* <Select value={visaType} onValueChange={setVisaType}>
        <SelectTrigger className="w-[180px] rounded-none pl-4 hidden md:table-cell">
          <SelectValue placeholder="Visa Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Student">Student</SelectItem>
          <SelectItem value="Work Permit">Work Permit</SelectItem>
          <SelectItem value="Visitor">Visitor</SelectItem>
        </SelectContent>
      </Select>
      <div className="self-stretch border-l border-gray-300 hidden md:table-cell" /> */}

      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-[180px] rounded-none pl-4">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Completed">Completed</SelectItem>
          <SelectItem value="Rejected">Rejected</SelectItem>
          <SelectItem value="Processing">Processing</SelectItem>
          <SelectItem value="On Hold">On Hold</SelectItem>
        </SelectContent>
      </Select>
      <div className="self-stretch border-l border-gray-300" />

      <Button
        variant="ghost"
        onClick={resetFilters}
        className=" text-red-500 w-[180px]"
      >
        <RotateCcw className="mr-2 h-4 w-4 text-red-500" /> Reset Filter
      </Button>
    </div>
  );
}
