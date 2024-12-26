import { InvitationStatus } from "@/types";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

interface GetMembersFilter {
  page?: number;
  limit?: number;
  email?: string;
  invitationStatus?: InvitationStatus | "all";
}

const useGetMemberFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const email = searchParams.get("email");
  const invitationStatus = searchParams.get("invitationStatus");
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page") as string)
    : undefined;
  const limit = searchParams.get("limit")
    ? parseInt(searchParams.get("limit") as string)
    : undefined;

  const setFilters = useCallback((filters: GetMembersFilter) => {
    setSearchParams((params) => {
      if (filters.email) params.set("email", filters.email);
      else params.delete("email");

      if (filters.invitationStatus)
        params.set("invitationStatus", filters.invitationStatus);

      if (filters.page) params.set("page", filters.page.toString());
      if (filters.limit) params.set("limit", filters.limit.toString());

      return params;
    });
  }, []);

  return { page, limit, email, invitationStatus, setFilters };
};

export default useGetMemberFilters;
