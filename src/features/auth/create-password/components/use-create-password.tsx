import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { setAuth } from "@/store/slices/auth-slice";

import apis from "../../apis";

const useCreatePassoword = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const { isLoading, mutate, data } = useMutation({
    mutationFn: ({
      data,
    }: {
      data: { password: string; confirmPassword: string; token: string };
    }) => apis.verifyEmailAndCreatePassword({ data }),
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
        description: error?.response?.data?.message,
        variant: "destructive",
      });
    },
    retry: false,
  });

  return { isLoading, mutate, data };
};

export default useCreatePassoword;
