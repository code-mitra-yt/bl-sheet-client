import { useMutation } from "react-query";

import { useToast } from "@/hooks/use-toast";

import apis from "../../apis";

const useSignIn = () => {
  const { toast } = useToast();

  const { isLoading, mutate, data } = useMutation({
    mutationFn: ({ data }: { data: { email: string; password: string } }) =>
      apis.login({ data }),
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

export default useSignIn;
