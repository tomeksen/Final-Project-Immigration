import AppPaymentSwiper from "@/app/app/(sections)/payments/_components/paymentSwiper/AppPaymentSwiper";
import { PaymentChart } from "./_components/PaymentChart";
import PaymentSavedCard from "./_components/PaymentSavedCard";
import PaymentRefundPolicy from "./_components/PaymentRefundPolicty";
import PaymentInvoices from "./_components/PaymentInvoices";
import { currentUser } from "@clerk/nextjs/server";

import { ERROR_MESSAGES } from "@/config/ErrorMessage";
import { Application } from "@/type/Applications.type";
import { filteredPayments } from "@/utils/payments";
import { PaymentManagerTable } from "@/components/dashboard/payments/payment-list";
import { apiServerFetch } from "@/config/apiServer";
import { Suspense } from "react";
import LottieLoading from "@/components/common/LottieLoading";

const PaymentsPage = async () => {
  const user = await currentUser();
  const isAdminUser = user?.publicMetadata?.role === "admin" ? true : false;
  const userId = user?.id;
  // const userId = "1";
  try {
    // fetch all the payment data
    const payments = await apiServerFetch(
      `payments/getPaymentsByUser/${userId}`
    );

    // application
    const applications = await apiServerFetch(`applications/${userId}`);

    const applicationIds = applications.map((app: Application) => ({
      applicationId: app.id,
      title: app.applicationName,
    }));

    const newPayments = filteredPayments(payments, applicationIds);
    let completedPayments = [];
    let paymentsData = [];
    if(isAdminUser) {
      paymentsData = await apiServerFetch(`payments`); 
      completedPayments = await apiServerFetch(`payments/getCompletedPayment`);
    }
    /** example
 * [
    {
      id: 'first',
      description: 'new payment',
      amount: 2000,
      paymentDate: '2024-06-25',
      isCompleted: false
    },
  ]
 */
    return (
      <Suspense fallback={<LottieLoading />}>
        <div className="h-full bg-gray-100">
          {isAdminUser ? (
            <div className="h-full">
                <PaymentManagerTable payments={paymentsData}/>
              <div className=" flex flex-1 flex-col gap-4 p-4">
              {/* TODO MAKE A REAL SUMMARY*/}
                <PaymentInvoices invoices={completedPayments} />
              </div>
              <div className="rounded-xl w-1/4 p-4 h-1/3">
                <PaymentChart payments={newPayments} />
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
                      <AppPaymentSwiper
                        swiperType="lg"
                        payments={newPayments}
                      />
                    </div>
                    <div className="rounded-xl bg-muted/50">
                      <PaymentChart payments={newPayments} />
                    </div>
                    {/* Row 2 */}
                    <div className="rounded-xl bg-muted/50 xl:col-span-2 xl:row-span-2">
                      <PaymentInvoices invoices={newPayments} />
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
                        <AppPaymentSwiper
                          swiperType="sm"
                          payments={newPayments}
                        />
                      </div>
                      <div className="rounded-xl bg-muted/50">
                        <PaymentChart payments={newPayments} />
                      </div>
                    </div>
                    {/* Row 2 */}
                    <div className="rounded-xl bg-muted/50">
                      <PaymentInvoices invoices={newPayments} />
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
                      <AppPaymentSwiper
                        swiperType="sm"
                        payments={newPayments}
                      />
                    </div>
                    <div className="rounded-xl bg-muted/50 w-full">
                      <PaymentChart payments={newPayments} />
                    </div>
                    <div className="rounded-xl bg-muted/50">
                      {" "}
                      <PaymentInvoices invoices={newPayments} />
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
      </Suspense>
    );
  } catch (error) {
    <div className="h-full w-full flex items-center justify-center text-primary-red">
      {ERROR_MESSAGES.GENERAL.UNEXPECTED}
    </div>;
  }
};

export default PaymentsPage;
