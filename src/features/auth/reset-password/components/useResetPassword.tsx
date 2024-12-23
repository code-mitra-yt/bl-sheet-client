import { useMutation } from "react-query";
import { useToast } from "@/hooks/use-toast";

import apis from "../../apis";

const useResetPassword = () => {
  const { toast } = useToast();

  const { isLoading, mutate, data } = useMutation({
    mutationFn: ({
      data,
    }: {
      data: { password: string; confirmPassword: string; token: string };
    }) => apis.resetPassword({ data }),
    onSuccess: ({ data }) => {
      toast({
        title: "Success",
        description: data?.message,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    },
    retry: false,
  });

  return { isLoading, mutate, data };
};

export default useResetPassword;
