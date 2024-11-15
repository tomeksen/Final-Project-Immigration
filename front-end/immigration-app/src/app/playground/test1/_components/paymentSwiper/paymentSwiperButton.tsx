"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PaymentSwiperButtonProps = {
  containerStyles: string;
  btnStyles: string;
  currentIndex: number;
  maxIndex: number;
  // iconsStyles: string;
};

const PaymentSwiperButton = ({
  containerStyles,
  btnStyles,
  currentIndex,
  maxIndex,
}: PaymentSwiperButtonProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <Button
        className={cn(
          btnStyles,
          currentIndex === 0 && "opacity-0 cursor-default"
        )}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={""} />
      </Button>
      <Button
        className={cn(
          btnStyles,
          currentIndex === maxIndex && "opacity-0 cursor-default"
        )}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={""} />
      </Button>
    </div>
  );
};

export default PaymentSwiperButton;
