"use client";

import { Calendar, TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { format } from "date-fns";

export function PaymentChart() {
  type PaymentType = {
    id: string;
    description: string;
    amount: number;
  };

  // ---------------------------------------------------------------------------
  // will deliver them as props
  const totalCost = 1000;
  const payments: PaymentType[] = [
    {
      id: "Maria_CICCC_UX/UI_2",
      description: "Cuota de inscripción escolar",
      amount: 150.0,
    },
    {
      id: "Maria_CICCC_UX/UI_3",
      description: "Cuota mensual",
      amount: 200.0,
    },
    {
      id: "Maria_CICCC_UX/UI_4",
      description: "Material escolar",
      amount: 75.0,
    },
  ];
  // ---------------------------------------------------------------------------

  // generate blue colors
  const generateColors = (num: number): string[] => {
    return Array.from({ length: num }, (_, index) => {
      const hue = 200 + index * 20;
      const saturation = 50 + ((index * 5) % 10);
      const lightness = 60;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
  };
  const colors = useMemo(
    () => generateColors(payments.length),
    [payments.length]
  );

  const chartData = useMemo(() => {
    return payments.map((payment, index) => ({
      name: payment.description,
      value: payment.amount,
      fill: colors[index],
    }));
  }, []);

  const chartConfig = useMemo(() => {
    const config: ChartConfig = {};

    payments.forEach((payment, index) => {
      config[payment.id] = {
        label: payment.id,
        color: colors[index],
      };
    });
    return config;
  }, [payments]);

  const totalPayment = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader className="items-left pb-0">
        <CardTitle>Payment Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-around flex-1 pb-0">
        <div className="grid grid-cols-3 auto-rows-auto">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[170px] max-w-full col-span-2"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                startAngle={90}
                endAngle={-270}
                innerRadius={60}
                outerRadius={75}
                strokeWidth={5}
              >
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
                            className="fill-foreground text-xl font-bold"
                          >
                            {`${(totalPayment / totalCost) * 100} %`}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-foreground"
                          >
                            {`CAD ${totalPayment}`}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>

          <div className="flex flex-col justify-center gap-2 text-xs">
            {/* date */}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {format(new Date(), "yyyy-MM-dd")}
            </div>
            {/* colors */}
            {payments.map((payment, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="h-4 w-4 rounded-full flex-shrink-0"
                  style={{ background: colors[index] }}
                ></span>
                <p className="text-xs flex-wrap">{payment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
