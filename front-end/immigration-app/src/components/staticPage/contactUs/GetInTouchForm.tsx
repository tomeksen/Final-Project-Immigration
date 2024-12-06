"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, Form, useFormContext } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/schema/index";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function GetInTouchForm() {
  // 1. Define your form.
  const formDetails = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <FormProvider {...formDetails}>
      <Form {...formDetails}>
        <form
          onSubmit={formDetails.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-1">
            <FormField
              control={formDetails.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John"
                      className="bg-white"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formDetails.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Doe"
                      className="bg-white"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formDetails.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="JohnDoe@gmail.com"
                      className="bg-white"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formDetails.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      placeholder="Message"
                      className="bg-white"
                      required
                      style={{
                        width: "100%",
                        height: "100px",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
                        padding: "10px",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center align-middle justify-center p-1"
            >
              <Input
                type="submit"
                className="hover:cursor-pointer text-white bg-primary-red p-1 rounded-md w-1/2 m-auto font-semibold hover:bg-red-700 items-center align-middle"
              />
            </motion.div>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
}
