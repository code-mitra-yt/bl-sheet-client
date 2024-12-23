import { useMutation } from "react-query";
import { toast } from "@/hooks/use-toast";

import apis from "../../apis";

const useForgotPassword = () => {
  const { isLoading, mutate, data } = useMutation({
    mutationFn: ({ data }: { data: { email: string } }) =>
      apis.forgotPassword({ data }),
    onSuccess: ({ data }) => {
      toast({
        title: "Success",
        description: data?.message,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.response?.data?.message,
        variant: "destructive",
      });
    },
    retry: false,
  });

  return { isLoading, mutate, data };
};

export default useForgotPassword;
