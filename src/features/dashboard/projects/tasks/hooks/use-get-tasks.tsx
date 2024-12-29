import { QUERY } from "@/constants";
import { toast, useAuth } from "@/hooks";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import apis from "../apis";

const useGetTasks = () => {
  const { projectId } = useParams();
  const { authToken } = useAuth();

  const {
    isLoading,
    refetch,
    data: response,
  } = useQuery({
    queryKey: [QUERY.TASK.GET_TASKS, projectId],
    queryFn: () => apis.getTasks({ params: { projectId }, authToken }),
    onError: (err: any) => {
      toast({
        title: "Error",
        description: err?.response?.data?.message,
        variant: "destructive",
      });
    },
    retry: false,
  });

  return { isLoading, refetch, tasks: response?.data?.data?.tasks };
};

export default useGetTasks;
