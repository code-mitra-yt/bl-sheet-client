import { z } from "zod";

export const signUpFormSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Full name must be at least 2 characters.",
    })
    .max(30, {
      message: "Full name must not be longer than 30 characters.",
    }),

  email: z
    .string({
      required_error: "Please enter valid email address.",
    })
    .email(),
});

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
