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
  applicationId: z.number({
    required_error: "Please select an application ID.",
  }),
  categoryName: z.string({
    required_error: "Please enter a category name.",
  }),
  order: z.number({
    required_error: "Please enter an order number.",
  }),
})

type CategoryCreatorFormProps = {
  applicationId: string;
  addCategory: (category: Category) => void;
};

export function CategoryCreatorManagerForm({ applicationId, addCategory }: CategoryCreatorFormProps) {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicationId: Number(applicationId),
      categoryName: "",
      order: 1,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    addCategory(values);
    toast.success("Category added successfully!");
    form.reset();
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>New Category linked to application {applicationId}</CardTitle>
        <CardDescription>Fill out the form below to create a new category.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form key={applicationId} {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter category name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the name that will be used to identify your category.
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
        <Button type="submit" className="w-full" onClick={form.handleSubmit(onSubmit)}>
          Add Category
        </Button>
      </CardFooter>
    </Card>
  );
}