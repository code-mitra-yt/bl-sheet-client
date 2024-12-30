import { TaskPriority, TaskStatus } from "@/types";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export interface GetTaskFilters {
  title?: string;
  priority?: TaskPriority | "All";
  status?: TaskStatus | "All";
  assignedToMe?: string;
  createdByMe?: string;
  sortByCreated?: string;
}

const useGetTaskFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");
  const status = searchParams.get("status");
  const priority = searchParams.get("priority");
  const assignedToMe = searchParams.get("assignedToMe");
  const createdByMe = searchParams.get("createdByMe");
  const sortByCreated = searchParams.get("sortByCreated");

  const setFilters = useCallback((filters: GetTaskFilters) => {
    setSearchParams((params) => {
      if (filters?.title) params.set("title", filters.title);
      else params.delete("title");
      if (filters?.status) params.set("status", filters.status);
      if (filters?.priority) params.set("priority", filters.priority);
      if (filters?.assignedToMe === "true")
        params.set("assignedToMe", filters.assignedToMe);
      if (filters?.createdByMe === "true")
        params.set("createdByMe", filters.createdByMe);
      if (filters?.sortByCreated === "true")
        params.set("sortByCreated", filters.sortByCreated);
      return params;
    });
  }, []);

  return {
    title,
    status,
    priority,
    assignedToMe,
    createdByMe,
    sortByCreated,
    setFilters,
  };
};

export default useGetTaskFilters;
