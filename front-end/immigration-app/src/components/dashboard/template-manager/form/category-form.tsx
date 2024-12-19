'use client'
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
import { Category } from "@/type/Applications.type";
import { useRouter } from "next/navigation"

const formSchema = z.object({
    applicationId: z.number( {
      required_error: "Please select a applicationId.",
    }),
    categoryName: z.string({
      required_error: "Please select an application type.",
    }),
    order: z.number({
      required_error: "Please select a Number.",
    }),

  })

type CategoryTableProps = {
  applicationId?: string;
};

export function CategoryManagerForm({applicationId}: CategoryTableProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        applicationId: applicationId ? Number(applicationId) : 1,
        categoryName: "",
        order: 1,
      },
    })

    const addCategories = async (values: Category) => {
      try {
          const response = await fetch(
            `https://immigrationapi.tomytrt.workers.dev/api/categories`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );
    
          if (!response.ok) {
            throw new Error("Failed to create application");
          }
    
          const result = await response.json();
          console.log(result);
          toast.success("Application created successfully!");
        } catch (e: any) {
          toast.error("Failed to create application");
          console.error("Failed to create application", e);
        } 
  };
  
  if (!applicationId) {
    applicationId = "";
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    addCategories(values);
    router.push(`/template-manager/${applicationId}`);
    return;
  }

  return (
    <div>
      <Card className="w-full max-w-2xl mx-auto mt-40">
      <CardHeader>
        <CardTitle>New Category linked to application {applicationId}</CardTitle>
        <CardDescription>Fill out the form below to create a new category.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <FormField
              control={form.control}
              name="categoryName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Category name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name that will be used to identify your Category.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter order"
                      {...field}
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>This is the order of the category.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="gap-3">
        <Button type="submit" className="w-full " onClick={form.handleSubmit(onSubmit)}>Add Category</Button>
      </CardFooter>
    </Card>
    </div>
  );
}