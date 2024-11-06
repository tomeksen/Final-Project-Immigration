"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Badge } from "@/components/ui/badge";

export default function AppPaymentSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample payment data
  const payments = [
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % payments.length);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-xl font-semibold mb-2">Awaiting Payment</h1>
      <p className="mb-4">
        You have <span className="text-red-500">3 pending payments</span>.
      </p>
      <div className="flex items-center justify-center">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="flex items-center justify-center"
        >
          {payments.map((payment, index) => {
            return (
              <SwiperSlide>
                <Card
                  className="relative overflow-hidden w-[220px] min-h-[181px] mx-auto"
                  key={index}
                >
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

                  <Button className="absolute bottom-0 bg-primary-red text-white p-2 w-full rounded-none rounded-b-md">
                    Make Payment
                  </Button>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Pagination indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {payments.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
