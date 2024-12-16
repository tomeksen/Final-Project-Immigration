"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { Badge } from "@/components/ui/badge";
import PaymentSwiperButton from "./paymentSwiperButton";
import { cn } from "@/lib/utils";
import PaymentDialog from "../PaymentDialog";

type PaymentSwiperProps = {
  swiperType: "sm" | "lg";
  payments: Payment[];
};
type Payment = {
  id: string;
  description: string;
  amount: number;
};

export default function AppPaymentSwiper({
  swiperType,
  payments,
}: PaymentSwiperProps) {
  // Sample payment data

  // const payments: Payment[] = [
  //   {
  //     id: "Maria_CICCC_UX/UI_2",
  //     description: "Cuota de inscripción escolar",
  //     amount: 150.0,
  //   },
  //   {
  //     id: "Maria_CICCC_UX/UI_3",
  //     description: "Cuota mensual",
  //     amount: 200.0,
  //   },
  //   {
  //     id: "Maria_CICCC_UX/UI_4",
  //     description: "Material escolar",
  //     amount: 75.0,
  //   },
  // ];

  const slidesPerView = swiperType === "sm" ? 1 : 3;

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setCurrentIndex(currentIndex);
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Awaiting Payment</CardTitle>
        <CardDescription className="mt-3 text-foreground">
          You have <span className="text-primary-red">3 pending payments</span>.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full mx-auto p-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          onSlideChange={handleSlideChange}
          className={cn(
            "flex items-center justify-center",
            swiperType === "sm" ? "w-full h-1/2" : "w-full"
          )}
        >
          {payments.map((payment, index) => {
            return (
              <SwiperSlide key={index} className="z-0">
                <Card className="relative overflow-hidden w-[220px] min-h-[181px]  mx-auto">
                  <div className="p-4">
                    <Badge
                      variant="outline"
                      className="mb-2 w-full rounded-full"
                    >
                      {payment.id}
                    </Badge>
                    <div className="text-gray-700 font-thin text-sm mb-2">
                      {payment.description}
                    </div>
                    <div className="text-2xl">
                      CAD {payment.amount.toFixed(2)}
                    </div>
                  </div>

                  <PaymentDialog />
                </Card>
              </SwiperSlide>
            );
          })}
          <PaymentSwiperButton
            currentIndex={currentIndex}
            maxIndex={
              swiperType === "sm" ? payments.length - 1 : payments.length - 2
            }
            containerStyles="z-10 w-full gap-2 absolute bottom-[calc(50%_-_22px)] right-0 left-0 flex justify-between"
            btnStyles={cn(
              "flex items-center justify-center text-white bg-primary-gray p-2 w-[32px] h-[32px] rounded-full"
            )}
          />
        </Swiper>
      </CardContent>
    </Card>
  );
}
