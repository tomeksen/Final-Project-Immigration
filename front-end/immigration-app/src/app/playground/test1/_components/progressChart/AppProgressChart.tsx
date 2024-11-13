"use client";

// This component is designed for laptop screens

import * as React from "react";

import { Label, Pie, PieChart, Cell } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// TODO: Add the actual data from the backend
const chartData = [
  { item: "Getting Started", progress: 50 },
  { item: "School Admission", progress: 20 },
  { item: "Visa Application", progress: 75 },
  { item: "Pre-Departure", progress: 50 },
];

// Don't need to change chart colors
const COLORS = ["#0C9986", "#F5F6FA"];

const chartConfig: ChartConfig = {
  progress: {
    color: COLORS[0],
  },
  remaining: {
    color: COLORS[1],
  },
};

export function AppProgressChart() {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-left pb-0">
        <CardTitle>Progress</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-around  h-full">
        {chartData.map((data, index) => {
          const remaining = 100 - data.progress;
          const pieData = [{ value: data.progress }, { value: remaining }];

          return (
            <ChartContainer
              config={chartConfig}
              className="flex flex-col items-center w-[150px] max-h-[200px]"
            >
              <PieChart width={150} height={150}>
                <Pie
                  key={data.item}
                  data={pieData}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  strokeWidth={5}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`cell-${index}-${i}`} fill={COLORS[i]} />
                  ))}

                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-2xl font-bold"
                            >
                              {`${data.progress}%`}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 80}
                              className="font-medium"
                            >
                              {data.item}
                            </tspan>
                          </text>
                        );
                      }
                      return null;
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          );
        })}
      </CardContent>
    </Card>
  );
}
