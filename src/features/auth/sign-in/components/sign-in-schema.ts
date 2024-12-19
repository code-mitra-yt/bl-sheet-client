import { z } from "zod";

export const signInFormSchema = z.object({
  email: z
    .string({
      required_error: "Please enter email address.",
    })
    .email(),

  password: z.string({
    required_error: "Please enter password.",
  }),
});

export type SignInFormValues = z.infer<typeof signInFormSchema>;
