import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoaderCircle } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useInviteMember from "../hooks/use-invite-member";

export const inviteMemberSchema = z.object({
  email: z
    .string({
      required_error: "Please enter valid email address.",
    })
    .email(),
});
export type InviteMemberValues = z.infer<typeof inviteMemberSchema>;

const SignUpForm = () => {
  const { isLoading, mutate } = useInviteMember();
  const form = useForm<InviteMemberValues>({
    resolver: zodResolver(inviteMemberSchema),
    mode: "onChange",
  });

  const onSubmit = (data: InviteMemberValues) => {
    console.log(data);
    mutate();
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-6 md:px-0 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@blsheet.com"
                  className="focus-visible:ring-1 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end">
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading && <LoaderCircle className="mr-2 size-4 animate-spin" />}
            Invite
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
