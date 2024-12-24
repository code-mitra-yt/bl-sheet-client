import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/slices/auth-slice";
import { useToast } from "@/hooks";

import apis from "../../apis";

const useResetPassword = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const { isLoading, mutate, data } = useMutation({
    mutationFn: ({
      data,
    }: {
      data: { password: string; confirmPassword: string; token: string };
    }) => apis.resetPassword({ data }),
    onSuccess: ({ data: response }) => {
      toast({
        title: "Success",
        description: response?.message,
      });
      dispatch(
        setAuth({
          user: response.data.user,
          authToken: response.data.token,
        })
      );
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
