import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks";

import apis from "../../apis";

const useForgotPassword = () => {
  const navigate = useNavigate();
  const { isLoading, mutate, data } = useMutation({
    mutationFn: ({ data }: { data: { email: string } }) =>
      apis.forgotPassword({ data }),
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
        description: error?.response?.data?.message,
        variant: "destructive",
      });
    },
    retry: false,
  });

  return { isLoading, mutate, data };
};

export default useForgotPassword;
