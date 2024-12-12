"use client";

import React, { useState } from "react";

import { RotateCcw } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type AppearanceType = {
  baseTheme: any;
};

export type FilterProps = {
  sortBy: string;
  visaType: string;
  status: string;
  setSortBy: (value: string) => void;
  setVisaType: (value: string) => void;
  setStatus: (value: string) => void;
  resetFilters: () => void;
  appearance?: AppearanceType;
};

/**
 * A component for filtering table data based on sorting, visa type, and status.
 *
 * @param {string} sortBy - The current selected sorting option.
 * @param {string} visaType - The current selected visa type.
 * @param {string} status - The current selected status.
 * @param {Function} setSortBy - Function to update the sorting option.
 * @param {Function} setVisaType - Function to update the visa type.
 * @param {Function} setStatus - Function to update the status.
 * @param {Function} resetFilters - Function to reset all filters to default values.
 * @param {AppearanceType} [appearance] - Optional styling object for custom appearance.
 * @returns {JSX.Element} The rendered filter table component.
 */
export default function FilterTable({
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
    <div className="flex items-center gap-1 bg-white rounded-lg p-2 max-w-4xl">
      <h2 className="px-1 w-[180px] text-sm">Filter by</h2>
      <div className="self-stretch border-l border-gray-300" />

      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[180px] rounded-none mr-1 pl-4">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="date">Date: First to Last</SelectItem>
          <SelectItem value="date-last">Date: Last to First</SelectItem>
          <SelectItem value="progress">Progress: Low to High</SelectItem>
          <SelectItem value="progress-hl">Progress: Hight to Low</SelectItem>
          <SelectItem value="name">A-Z</SelectItem>
        </SelectContent>
      </Select>
      <div className="self-stretch border-l border-gray-300" />

      <Select value={visaType} onValueChange={setVisaType}>
        <SelectTrigger className="w-[180px] rounded-none pl-4">
          <SelectValue placeholder="Visa Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Student">Student</SelectItem>
          <SelectItem value="Work Permit">Work Permit</SelectItem>
          <SelectItem value="Visitor">Visitor</SelectItem>
        </SelectContent>
      </Select>
      <div className="self-stretch border-l border-gray-300" />

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
        className=" text-primary-red w-[180px]"
      >
        <RotateCcw className="mr-2 h-4 w-4 text-primary-red" /> Reset Filter
      </Button>
    </div>
  );
}
