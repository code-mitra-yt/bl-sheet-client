import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "react-query";
import apis from "../apis";
import { toast, useAuth } from "@/hooks";
import { LoaderCircle } from "lucide-react";
import { MemberRole } from "@/types";

const FormSchema = z.object({
  role: z.union([z.literal("Admin"), z.literal("Owner"), z.literal("Member")]),
});

interface UpdateRoleFormProps {
  refetchMember: () => void;
  onClose: () => void;
  memberId: string;
  projectId: string;
  role: MemberRole;
}

const UpdateRoleForm = ({
  refetchMember,
  onClose,
  memberId,
  projectId,
  role,
}: UpdateRoleFormProps) => {
  const { authToken } = useAuth();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { role },
  });

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: any) => apis.updateMembr({ data, authToken }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Member role updated successfully",
      });
      refetchMember();
      onClose();
    },
    onError: (err: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: err?.response?.data?.message,
      });
    },
    retry: false,
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const data = {
      ...values,
      memberId,
      projectId,
    };
    mutate({ data });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="cursor-pointer" value="Admin">
                    Admin
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="Member">
                    Member
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="Owner">
                    Owner
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {isLoading && <LoaderCircle className="ml-2 animate-spin" />}
            <span>Save Changes</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateRoleForm;
