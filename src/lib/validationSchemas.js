import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(1, "Your name is required"),
  email: z.string().min(1, "The email is required").email("The email is invalid"),
  message: z.string().min(1, "The message is required"),
});