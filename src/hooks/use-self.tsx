import { useQuery } from "react-query";
import { useAuth, toast, useLogout } from "@/hooks";

import apis from "@/features/auth/apis";

const useSelf = () => {
  const { authToken } = useAuth();
  const { logout } = useLogout();

  const { isLoading, data } = useQuery({
    queryKey: ["self"],
    queryFn: () => apis.getSelf({ data: { token: authToken } }),
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.response?.data?.message,
        variant: "destructive",
      });
      logout();
    },
    cacheTime: 60 * 60 * 1000,
  });

  return { isLoading, data };
};

export default useSelf;
