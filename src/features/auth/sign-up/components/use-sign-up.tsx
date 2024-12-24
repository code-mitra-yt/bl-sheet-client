import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks";

import apis from "../../apis";

const useSignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { isLoading, mutate, data } = useMutation({
    mutationFn: ({ data }: { data: { email: string; fullName: string } }) =>
      apis.register({ data }),
    onSuccess: ({ data }) => {
      toast({
        title: "Success",
        description: data?.message,
      });
      navigate(`/guidance/verification?email=${data?.data?.email}`);
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

export default useSignUp;
