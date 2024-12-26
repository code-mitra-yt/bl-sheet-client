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
import { useParams } from "react-router-dom";

export const inviteMemberSchema = z.object({
  email: z
    .string({
      required_error: "Please enter valid email address.",
    })
    .email(),
});
export type InviteMemberValues = z.infer<typeof inviteMemberSchema>;

interface InviteMemberProps {
  refetchMembers: () => void;
  onClose: () => void;
}

const InviteMemberForm = ({ refetchMembers, onClose }: InviteMemberProps) => {
  const { projectId } = useParams();
  const form = useForm<InviteMemberValues>({
    resolver: zodResolver(inviteMemberSchema),
    mode: "onChange",
  });
  const { isLoading, mutate } = useInviteMember({
    refetchMembers,
    form,
    onClose,
  });

  const onSubmit = (data: InviteMemberValues) => {
    mutate({ data: { ...data, projectId: projectId as string } });
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

export default InviteMemberForm;
