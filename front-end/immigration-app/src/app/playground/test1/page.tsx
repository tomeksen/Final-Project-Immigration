import AppPaymentSwiper from "./_components/paymentSwiper/AppPaymentSwiper";
import { AppProgressChart } from "./_components/progressChart/AppProgressChart";

const Test1Page = () => {
  return (
    <div className="flex h-full w-full gap-4 p-4 mx-auto">
      <AppProgressChart />
      <AppPaymentSwiper swiperType="sm" />
    </div>
  );
};

export default Test1Page;
