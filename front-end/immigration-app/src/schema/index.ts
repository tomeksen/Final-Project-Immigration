import * as z from "zod";
export const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z
    .string()
    .min(2, {
      message: "Message must be at least 2 characters.",
    })
    .max(1000),
});
