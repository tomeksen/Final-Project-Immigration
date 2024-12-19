
import { PaymentManagerForm } from "@/components/dashboard/template-manager/payments/payment-form";
import { Payment } from "@/type/Payment.type";
import { auth } from "@clerk/nextjs/server";

const PaymentByIdPage = async ({
  params,
}: {
  params: Promise<{ paymentId: string }>
}) => {
  const paymentId = (await params).paymentId;

  return (
    <div>
     <PaymentManagerForm paymentId={paymentId}/>
    </div>
  );
};

export default PaymentByIdPage;