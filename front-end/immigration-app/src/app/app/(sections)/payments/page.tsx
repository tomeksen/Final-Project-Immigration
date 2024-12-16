import AppPaymentSwiper from "@/app/app/(sections)/payments/_components/paymentSwiper/AppPaymentSwiper";
import { PaymentChart } from "./_components/PaymentChart";
import PaymentSavedCard from "./_components/PaymentSavedCard";
import PaymentRefundPolicy from "./_components/PaymentRefundPolicty";
import PaymentInvoices from "./_components/PaymentInvoices";
import PaymentDialog from "./_components/PaymentDialog";
import { currentUser } from "@clerk/nextjs/server";
import { apiClientFetch, BASEURL } from "@/config/apiClient";
import { toast } from "sonner";
import { ERROR_MESSAGES } from "@/config/ErrorMessage";
import { Payment } from "@/type/Payment.type";

const PaymentsPage = async () => {
  const user = await currentUser();
  const isAdminUser = user?.publicMetadata?.role === "admin" ? true : false;
  console.log("user⭐️", user);
  const userId = "1";

  // todo ここのfetchロジックは後で作る
  try {
    const application = await apiClientFetch(`applications/${userId}`);
    const applicationIds = application[0].id;
    console.log(applicationIds);
    const payment = await apiClientFetch(`payments`);
  } catch (error) {
    console.error("error:", JSON.stringify(error));

    // if (error instanceof Error) {
    //   toast.error(ERROR_MESSAGES.GENERAL.SERVER_ERROR);
    // } else {
    //   toast.error(ERROR_MESSAGES.GENERAL.UNEXPECTED);
    // }
  }

  const payments: Payment[] = [
    {
      id: 1,
      title: "Initial Payment",
      amount: "2000",
      applicationId: 101,
      isCompleted: false,
      paymentDate: "2024-06-25",
      limitDate: "2024-07-10",
    },
    {
      id: 2,
      title: "First Installment",
      amount: "3000",
      applicationId: 102,
      isCompleted: true,
      paymentDate: "2024-06-10",
      limitDate: "2024-06-25",
    },
    {
      id: 3,
      title: "Final Payment",
      amount: "5000",
      applicationId: 101,
      isCompleted: false,
      paymentDate: "2024-07-01",
      limitDate: "2024-07-15",
    },
    {
      id: 4,
      title: "Additional Fees",
      amount: "1000",
      applicationId: 103,
      isCompleted: true,
      paymentDate: "2024-06-20",
      limitDate: "2024-07-05",
    },
    {
      id: 5,
      title: "Penalty Fees",
      amount: "500",
      applicationId: 104,
      isCompleted: false,
      paymentDate: "2024-06-28",
      limitDate: "2024-07-12",
    },
  ];

  return (
    <div className="h-full bg-gray-100">
      {isAdminUser ? (
        <div className="h-full">
          <div className=" flex flex-1 flex-col gap-4 p-4">
            {/* TODO MAKE A REAL SUMMARY*/}
            <PaymentInvoices />
          </div>
          <div className="rounded-xl w-1/4 p-4 h-1/3">
            <PaymentChart />
          </div>
        </div>
      ) : (
        <div>
          <div className=" max-w-screen flex flex-col">
            {/* Main content */}
            <div className="flex flex-1 flex-col gap-4 p-4">
              {/* Layout for xl */}
              <div className="hidden xl:grid gap-4 xl:grid-cols-3 xl:grid-rows-3 h-full">
                {/* Row 1 (2:1 ratio in xl) */}
                <div className="rounded-xl bg-muted/50 xl:col-span-2 h-full">
                  <AppPaymentSwiper swiperType="lg" />
                </div>
                <div className="rounded-xl bg-muted/50">
                  <PaymentChart />
                </div>
                {/* Row 2 */}
                <div className="rounded-xl bg-muted/50 xl:col-span-2 xl:row-span-2">
                  <PaymentInvoices />
                </div>
                <div className="rounded-xl bg-muted/50">
                  <PaymentSavedCard />
                </div>
                <div className="rounded-xl bg-muted/50">
                  <PaymentRefundPolicy />
                </div>
              </div>

              {/* Layout for md */}
              <div className="hidden md:grid gap-4 md:grid-cols-1 md:grid-rows-[auto_auto_auto] xl:hidden h-full">
                {/* Row 1 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-muted/50 flex">
                    <AppPaymentSwiper swiperType="sm" />
                  </div>
                  <div className="rounded-xl bg-muted/50">
                    <PaymentChart />
                  </div>
                </div>
                {/* Row 2 */}
                <div className="rounded-xl bg-muted/50">
                  {" "}
                  <PaymentInvoices />
                </div>
                {/* Row 3 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-muted/50">
                    <PaymentSavedCard />
                  </div>
                  <div className="rounded-xl bg-muted/50">
                    <PaymentRefundPolicy />
                  </div>
                </div>
              </div>

              {/* Layout for small screens */}
              <div className="md:hidden xl:hidden grid grid-cols-1 grid-rows-5 gap-4 h-full">
                <div className="rounded-xl bg-muted/50 w-full">
                  <AppPaymentSwiper swiperType="sm" />
                </div>
                <div className="rounded-xl bg-muted/50 w-full">
                  <PaymentChart />
                </div>
                <div className="rounded-xl bg-muted/50">
                  {" "}
                  <PaymentInvoices />
                </div>
                <div className="rounded-xl bg-muted/50">
                  <PaymentSavedCard />
                </div>
                <div className="rounded-xl bg-muted/50">
                  <PaymentRefundPolicy />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsPage;
