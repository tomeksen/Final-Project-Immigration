'use client'
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CalendarIcon, Plus, Trash2, ArrowLeft } from 'lucide-react'
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { Task } from "@/type/Applications.type"
import { toast } from "sonner"

const taskSchema = z.object({
  categoryId: z.number(),
  title: z.string().min(1, "Title is required"),
  isCompleted: z.boolean().default(false),
  isRevised: z.boolean().default(false),
  dueDate: z.date(),
  description: z.string(),
  steps: z.record(z.string()),
  instructions: z.record(z.string()),
  notes: z.string(),
})

type CategoryTableProps = {
  categoryId?: string;
  applicationId?: string;
};

export function TaskManagerForm({categoryId, applicationId}: CategoryTableProps) {
  const router = useRouter();
  const [steps, setSteps] = useState<string[]>(["step1"])
  const [instructions, setInstructions] = useState<string[]>(["instruction1"])

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      categoryId: categoryId ? Number(categoryId) : 1,
      title: "",
      isCompleted: false,
      isRevised: false,
      dueDate: new Date(),
      description: "",
      steps: {},
      instructions: {},
      notes: "",
    },
  })

  const addTask = async (values: Task) => {
    try {
        const response = await fetch(
          `https://immigrationapi.tomytrt.workers.dev/api/tasks`,
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
        toast.success("Application created successfully!");
      } catch (e: any) {
        toast.error("Failed to create application");
        console.error("Failed to create application", e);
      } 
  };


  function onSubmit(values: z.infer<typeof taskSchema>) {
    addTask(values);
    router.back();
  }

  const addStep = () => {
    const newStep = `step${steps.length + 1}`;
    setSteps([...steps, newStep]);
    form.setValue(`steps.${newStep}`, "");
  }

  const addInstruction = () => {
    const newInstruction = `instruction${instructions.length + 1}`;
    setInstructions([...instructions, newInstruction]);
    form.setValue(`instructions.${newInstruction}`, "");
  }

  const removeStep = (index: number) => {
    const stepToRemove = steps[index];
    setSteps(steps.filter((_, i) => i !== index));
    const values = form.getValues();
    delete values.steps[stepToRemove];
    form.reset(values);
  }

  const removeInstruction = (index: number) => {
    const instructionToRemove = instructions[index];
    setInstructions(instructions.filter((_, i) => i !== index));
    const values = form.getValues();
    delete values.instructions[instructionToRemove];
    form.reset(values);
  }

  return (
    <div>
      <Button
        variant="link"
        className="mb-4"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Go Back
      </Button>
      <Card className="w-full max-w-2xl mx-auto my-6">
      <CardHeader>
        <CardTitle>New Task</CardTitle>
        <CardDescription>Fill out the form below to create a new task.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter task title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter task description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="steps"
              render={() => (
                <FormItem>
                  <FormLabel>Steps</FormLabel>
                  <FormDescription>Add steps for your task</FormDescription>
                  {steps.map((step, index) => (
                    <FormField
                      key={step}
                      control={form.control}
                      name={`steps.${step}`}
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-2 mb-2">
                          <FormControl>
                            <Input placeholder={`Enter ${step}`} {...field} />
                          </FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              removeStep(index);
                              const { [`steps.${step}`]: _, ...rest } = form.getValues() as any;
                              form.reset(rest);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button type="button" variant="outline" onClick={addStep}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Step
                  </Button>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instructions"
              render={() => (
                <FormItem>
                  <FormLabel>Attachments</FormLabel>
                  <FormDescription>Add attachments for your task</FormDescription>
                  {instructions.map((instruction, index) => (
                    <FormField
                      key={instruction}
                      control={form.control}
                      name={`instructions.${instruction}`}
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-2 mb-2">
                          <FormControl>
                            <Input placeholder={`Enter ${instruction}`} {...field} />
                          </FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              removeInstruction(index);
                              const values = form.getValues();
                              delete values.instructions[instruction];
                              form.reset(values);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button type="button" variant="outline" onClick={addInstruction}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Instruction
                  </Button>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
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
                        selected={field.value ?? undefined}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter any additional notes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="isCompleted"
                render={({ field }) => (
                  <FormItem hidden>
                    <FormControl >
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Is Complete
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isRevised"
                render={({ field }) => (
                  <FormItem hidden>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Is Revised
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">Create Task</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
    </div>
  );
}