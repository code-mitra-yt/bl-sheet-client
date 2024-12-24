import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/slices/auth-slice";
import { useToast } from "@/hooks/use-toast";

import apis from "../../apis";

const useSignIn = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const { isLoading, mutate, data } = useMutation({
    mutationFn: ({ data }: { data: { email: string; password: string } }) =>
      apis.login({ data }),
    onSuccess: ({ data: response }) => {
      toast({
        title: "Success",
        description: response.message,
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

export default useSignIn;
