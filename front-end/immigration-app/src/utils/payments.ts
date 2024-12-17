import { Payment } from "@/type/Payment.type";

type PaymentSwiperType = {
  invoiceId: string;
  title: string;
  amount: number;
  paymentDate: string;
  isCompleted: boolean;
};

type ApplicationIdTitle = {
  applicationId: number;
  title: string;
};

/**
 * Filters and maps payment data to the appropriate format for a swiper component.
 *
 * @param {Payment[]} payments - The payment objects to be filtered.
 * @param {ApplicationIdTitle[]} applicationIds - The mapping of application IDs to their titles.
 * @returns {PaymentSwiperType[]} - The filtered and mapped payment data.
 */
export const filteredPayments = (
  payments: Payment[],
  applicationIds: ApplicationIdTitle[]
): PaymentSwiperType[] => {
  const applicationIdMap = new Map(
    applicationIds.map((app) => [app.applicationId, app.title])
  );

  return payments.map((payment) => ({
    invoiceId:
      applicationIdMap.get(payment.applicationId) || "Unknown Application",
    title: payment.title,
    amount: Number(payment.amount),
    paymentDate: payment.paymentDate,
    isCompleted: payment.isCompleted,
  }));
};
