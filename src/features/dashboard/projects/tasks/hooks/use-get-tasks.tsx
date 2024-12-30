import { QUERY } from "@/constants";
import { toast, useAuth } from "@/hooks";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import apis from "../apis";
import useGetTaskFilters from "./use-get-task-filters";

const useGetTasks = () => {
  const { projectId } = useParams();
  const { authToken } = useAuth();
  const { title, priority } = useGetTaskFilters();

  const {
    isLoading,
    refetch,
    data: response,
  } = useQuery({
    queryKey: [QUERY.TASK.GET_TASKS, projectId, { title, priority }],
    queryFn: () =>
      apis.getTasks({ params: { projectId, title, priority }, authToken }),
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
