import { ERROR_MESSAGES } from "@/config/ErrorMessage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

/**
 * Displays a payment error message in a styled card component.
 *
 * @param title - The title of the error card.
 * @param errorTitle - The specific error message to display.
 * @returns A React component containing the error message.
 */
const PaymentError = ({
  title,
  errorTitle,
}: {
  title: string;
  errorTitle: string;
}) => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center w-full mx-auto p-4 text-primary-red">
        {ERROR_MESSAGES.GENERAL.NOT_FOUND(errorTitle)}
      </CardContent>
    </Card>
  );
};

export default PaymentError;
