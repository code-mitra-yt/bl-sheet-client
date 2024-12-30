import { useMutation } from "react-query";
import { toast, useAuth } from "@/hooks";
import apis from "../apis";

interface UseAssignMemberProps {
  refetchTasks: () => void;
}

const useAssignMember = ({ refetchTasks }: UseAssignMemberProps) => {
  const { authToken } = useAuth();
  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: any) => apis.assignMember({ data, authToken }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Member assigned successfully",
      });
      refetchTasks();
    },
    onError: (err: any) => {
      toast({
        title: "Error",
        description: err?.response?.data?.message,
        variant: "destructive",
      });
    },
    retry: false,
  });

  return { mutate, isLoading };
};

export default useAssignMember;
