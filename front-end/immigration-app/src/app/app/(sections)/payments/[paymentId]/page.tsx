
import { Payment } from "@/type/Payment.type";
import { auth } from "@clerk/nextjs/server";

const PaymentByIdPage = async ({
  params,
}: {
  params: Promise<{ paymentId: string }>
}) => {
  const paymentId = (await params).paymentId;
  const { getToken } = await auth();
  
    const fetchPaymentById = async () => {
      try {
        const token = await getToken();
        const response = await fetch(
          `https://immigrationapi.tomytrt.workers.dev/api/payments/${paymentId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }

        const data = await response.json();
        return data;
      } catch (e: any) {
        throw new Error("Failed to fetch applications");
      }
    };

      const PaymentList : Payment[] = await fetchPaymentById();
  return (
    <div>
     
    </div>
  );
};

export default PaymentByIdPage;