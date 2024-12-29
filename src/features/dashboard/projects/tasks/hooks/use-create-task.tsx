import { useMutation } from "react-query";
import apis from "../apis";
import { toast, useAuth } from "@/hooks";

interface UseCreateTask {
  refetchTasks: () => void;
  form: any;
  onClose: () => void;
}

const useCreateTask = ({ refetchTasks, form, onClose }: UseCreateTask) => {
  const { authToken } = useAuth();

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: any) => apis.createTask({ data, authToken }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Task created successfully",
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

export default useCreateTask;
