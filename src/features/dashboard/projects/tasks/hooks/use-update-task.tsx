import { useMutation } from "react-query";
import apis from "../apis";
import { toast, useAuth } from "@/hooks";

interface UseUpdateTask {
  refetchTasks: () => void;
  form: any;
  onClose: () => void;
}

const useUpdateTask = ({ refetchTasks, form, onClose }: UseUpdateTask) => {
  const { authToken } = useAuth();

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: any) => apis.updateTask({ data, authToken }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Task updated successfully",
      });
      refetchTasks();
      form.reset();
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

  return { isLoading, mutate };
};

export default useUpdateTask;
