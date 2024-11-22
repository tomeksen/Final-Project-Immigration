"use client";

import { TrendingUp } from "lucide-react";
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

export function PaymentChart() {
  type PaymentType = {
    id: string;
    description: string;
    amount: number;
  };

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
  // const chartData = [
  //   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  //   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  //   { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  //   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  //   { browser: "other", visitors: 190, fill: "var(--color-other)" },
  // ];

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
  console.log(chartData);

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

  // const chartConfig = {
  //   visitors: {
  //     label: "Visitors",
  //   },
  //   chrome: {
  //     label: "Chrome",
  //     color: "hsl(var(--chart-1))",
  //   },
  //   safari: {
  //     label: "Safari",
  //     color: "hsl(var(--chart-2))",
  //   },
  //   firefox: {
  //     label: "Firefox",
  //     color: "hsl(var(--chart-3))",
  //   },
  //   edge: {
  //     label: "Edge",
  //     color: "hsl(var(--chart-4))",
  //   },
  //   other: {
  //     label: "Other",
  //     color: "hsl(var(--chart-5))",
  //   },
  // } satisfies ChartConfig;

  const totalPayment = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Payment Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
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
                          {`${totalPayment / totalCost} %`}
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
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
