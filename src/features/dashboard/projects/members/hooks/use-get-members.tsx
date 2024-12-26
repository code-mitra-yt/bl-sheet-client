import { useQuery } from "react-query";
import { useParams } from "react-router";

import { useAuth, toast } from "@/hooks";
import { QUERY } from "@/constants";

import apis from "../apis";
import useGetMemberFilters from "./use-get-member-filters";

const useGetMembers = () => {
  const { projectId } = useParams();
  const { authToken } = useAuth();
  const { email, invitationStatus } = useGetMemberFilters();

  const {
    isLoading,
    refetch,
    data: response,
  } = useQuery({
    queryKey: [
      QUERY.MEMBER.GET_MEMBERS,
      { projectId, email, invitationStatus },
    ],
    queryFn: () =>
      apis.getMembers({
        authToken,
        params: { projectId, email, invitationStatus },
      }),
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.response?.data?.message,
      });
    },
  });

  return {
    isLoading,
    refetch,
    members: response?.data?.data?.members,
    total: response?.data?.data?.total,
    totalPages: response?.data?.data?.totalPages,
    hasPrevPage: response?.data?.data?.hasPrevPage,
    hasNextPage: response?.data?.data?.hasNextPage,
  };
};

export default useGetMembers;
