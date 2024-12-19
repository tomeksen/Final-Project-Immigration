'use client'
import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner";
import { Payment } from "@/type/Payment.type";
import { useRouter } from "next/navigation"
import { UserSelector } from "../form/user-selector"

const formSchema = z.object({
  applicationId: z.number({
    required_error: "Please select an application ID.",
  }),
  title: z.string({
    required_error: "Please enter a title.",
  }),
  amount: z.string({
    required_error: "Please enter an amount.",
  }),
  limitDate: z.string({
    required_error: "Please enter a limit date.",
  }),
  paymentDate: z.string({
    required_error: "Please enter a payment date.",
  }),
  isCompleted: z.boolean().default(false),
  userId: z.string({
    required_error: "Please select a user.",
  }),
})

type PaymentFormProps = {
  applicationId?: string;
  paymentId?: string;
};

export function PaymentManagerForm({ applicationId, paymentId }: PaymentFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicationId: applicationId ? Number(applicationId) : 1,
      title: "",
      amount: "",
      limitDate: "",
      paymentDate: "",
      isCompleted: false,
      userId: "1",
    },
  })

  useEffect(() => {
    if (paymentId) {
      const fetchPayment = async () => {
        try {
          const response = await fetch(
            `https://immigrationapi.tomytrt.workers.dev/api/payments/${paymentId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch payment");
          }

          const data = await response.json();

          form.reset({
            applicationId: data[0].applicationId,
            title: data[0].title,
            amount: data[0].amount,
            limitDate: data[0].limitDate,
            paymentDate: data[0].paymentDate,
            isCompleted: data[0].isCompleted,
            userId: data[0].userId,
          });
          setIsLoading(false);
        } catch (e: any) {
          toast.error("Failed to fetch payment");
          console.error("Failed to fetch payment", e);
        }
      };

      fetchPayment();
    } else {
      setIsLoading(false);
    }
  }, [paymentId, form]);

  const addOrUpdatePayment = async (values: Payment) => {
    try {
      const response = await fetch(
        `https://immigrationapi.tomytrt.workers.dev/api/payments${paymentId ? `/${paymentId}` : ''}`,
        {
          method: paymentId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to ${paymentId ? 'update' : 'create'} payment`);
      }

      const result = await response.json();
      toast.success(`Payment ${paymentId ? 'updated' : 'created'} successfully!`);
      router.push(`/payments`);
    } catch (e: any) {
      toast.error(`Failed to ${paymentId ? 'update' : 'create'} payment`);
      console.error(`Failed to ${paymentId ? 'update' : 'create'} payment`, e);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    addOrUpdatePayment(values);
    return;
  }

  return (
    <div>
      <Card className="w-full max-w-2xl mx-auto mt-40">
        <CardHeader>
          <CardTitle>{paymentId ? 'Edit' : 'New'} Payment</CardTitle>
          <CardDescription>Fill out the form below to {paymentId ? 'edit' : 'create'} a payment.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User</FormLabel>
                    <UserSelector onSelect={field.onChange} />
                    <FormDescription>
                      Select the user for this application.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter payment title" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the title of the payment.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter amount" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the amount of the payment.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="limitDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Limit Date</FormLabel>
                      <FormControl>
                        <Input type="date" placeholder="Enter limit date" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the limit date for the payment.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paymentDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Date</FormLabel>
                      <FormControl>
                        <Input type="date" placeholder="Enter payment date" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the payment date.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isCompleted"
                  render={({ field }) => (
                    <FormItem >
                      <FormLabel>Is Completed</FormLabel>
                      <FormControl>
                        <Input type="checkbox" checked={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormDescription>
                        Check if the payment is completed.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="gap-3">
          <Button type="submit" className="w-full" onClick={form.handleSubmit(onSubmit)}>{paymentId ? 'Update' : 'Add'} Payment</Button>
        </CardFooter>
      </Card>
    </div>
  );
}