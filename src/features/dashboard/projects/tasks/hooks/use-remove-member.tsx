import { toast, useAuth } from "@/hooks";
import { useMutation } from "react-query";

import apis from "../apis";

interface UseRemoveMemberProps {
  refetchTasks: () => void;
}

const useRemoveMember = ({ refetchTasks }: UseRemoveMemberProps) => {
  const { authToken } = useAuth();
  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: any) =>
      apis.removeAssignedMember({ authToken, data }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Member removed successfully",
      });
      refetchTasks();
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

  return { mutate, isLoading };
};

export default useRemoveMember;
