import { useMutation } from "react-query";
import { toast, useAuth } from "@/hooks";
import apis from "../apis";

interface UserInviteMemberProps {
  refetchMembers: () => void;
  form: any;
  onClose: () => void;
}

const useInviteMember = ({
  refetchMembers,
  form,
  onClose,
}: UserInviteMemberProps) => {
  const { authToken } = useAuth();

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: { data: { email: string; projectId: string } }) =>
      apis.inviteMember({
        authToken,
        data,
      }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Member invited successfully",
      });
      refetchMembers();
      form.reset();
      onClose();
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.response?.data?.message,
      });
    },
    retry: false,
  });

  return { isLoading, mutate };
};

export default useInviteMember;
