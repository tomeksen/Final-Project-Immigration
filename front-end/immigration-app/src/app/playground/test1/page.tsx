import { AppProgressChart } from "@/components/dashboard/progressChart/AppProgressChart";
import { DesktopCalendar } from "../../../components/common/Calendar/DesktopCalendar";
import { MobileCalendar } from "../../../components/common/Calendar/MobileCalendar";
import SideSchedule from "../../../components/common/Calendar/SideSchedule";
import AppPaymentSwiper from "../../app/(sections)/payments/_components/paymentSwiper/AppPaymentSwiper";

const Test1Page = () => {
  const bookedDays = [
    {
      startDate: new Date(2024, 10, 5),
      endDate: new Date(2024, 10, 7),
      title: "Event 1",
    },
    {
      startDate: new Date(2024, 10, 6),
      endDate: new Date(2024, 10, 8),
      title: "Event 2",
    },
    {
      startDate: new Date(2024, 10, 25),
      endDate: new Date(2024, 10, 25),
      title: "One-day Event",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-full w-full gap-4 p-4 mx-auto">
        <AppProgressChart />
        <AppPaymentSwiper swiperType="sm" />
      </div>
      <MobileCalendar bookedDays={bookedDays} />
      <div>
        <div className="container mx-auto gap-2 flex items-stretch">
          <SideSchedule />
          <DesktopCalendar bookedDays={bookedDays} />
        </div>
      </div>
    </div>
  );
};

export default Test1Page;
