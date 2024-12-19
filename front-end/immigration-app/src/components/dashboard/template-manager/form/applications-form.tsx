"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CalendarIcon } from 'lucide-react'

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { UserSelector } from "./user-selector"
import { toast } from "sonner";
import { Application } from "@/type/Applications.type"

  const formSchema = z.object({
    userId: z.string({
      required_error: "Please select a user.",
    }),
    applicationName: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    applicationType: z.string({
      required_error: "Please select an application type.",
    }),
    applicationStatus: z.string({
      required_error: "Please select a status.",
    }),
    applicationDate: z.date({
      required_error: "Please select a date.",
    }),
  })
 
  type applicationFormProps = {
    application: Application | null;
    addApplication: (application: Application) => void;
  };
export function ApplicationManagerForm({ application,addApplication }: applicationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: application?.userId? application.userId : "",
      applicationName: application?.applicationName? application.applicationName : "",
      applicationDate: application?.applicationDate? application.applicationDate : new Date(),
      applicationType: application?.applicationType? application.applicationType : "visa",
      applicationStatus: application?.applicationStatus? application.applicationStatus : "pending",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    addApplication(values);
    return;
    
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-14">
      <CardHeader>
        <CardTitle>New Application</CardTitle>
        <CardDescription>Fill out the form below to create a new application.</CardDescription>
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
                  <UserSelector onSelect={field.onChange}/>
                  <FormDescription>
                    Select the user for this application.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="applicationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter application name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name that will be used to identify your application.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="applicationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select application type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="visa">Visa</SelectItem>
                        <SelectItem value="citizenship">Citizenship</SelectItem>
                        <SelectItem value="permanent-residence">Permanent Residence</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose the type of application you're submitting.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="applicationStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Set the current status of your application.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="applicationDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() && date >= new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Select the date for your application.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="gap-3">
        <Button type="submit" className="w-full " onClick={form.handleSubmit(onSubmit)}>Next Step</Button>
      </CardFooter>
    </Card>
  )
}