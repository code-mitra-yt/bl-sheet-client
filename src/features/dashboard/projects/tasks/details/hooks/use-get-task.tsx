import { useQuery } from "react-query";
import { toast, useAuth } from "@/hooks";
import apis from "../../apis";

interface UseGetTaskProps {
  projectId: string;
  taskId: string;
}

const useGetTask = ({ projectId, taskId }: UseGetTaskProps) => {
  const { authToken } = useAuth();

  const {
    isLoading,
    refetch,
    data: response,
  } = useQuery({
    queryFn: () => apis.getTask({ authToken, params: { projectId, taskId } }),
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.response?.data?.message,
        variant: "destructive",
      });
    },
    retry: false,
  });

  return { isLoading, refetch, task: response?.data?.data?.task ?? null };
};

export default useGetTask;
