export type Payment = {
  id: number;
  title: string;
  amount: string;
  applicationId: number;
  isCompleted: boolean;
  limitDate: string;
  paymentDate: string;
};

export type PaymentFiltered = {
  invoiceId: string;
  title: string;
  amount: number;
  paymentDate: string;
  isCompleted: boolean;
};

export type PaymentChartType = {
  invoiceId: string;
  title: string;
  amount: number;
  isCompleted: boolean;
};
export type PaymentSwiperType = {
  invoiceId: string;
  title: string;
  amount: number;
  paymentDate: string;
  isCompleted: boolean;
};

export type PaymentInvoiceType = {
  invoiceId: string;
  invoiceName: string;
  status: string;
};
