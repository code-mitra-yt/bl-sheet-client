import { useMutation } from "react-query";
import { toast, useAuth } from "@/hooks";

import apis from "../apis";
import { ProjectValues } from "../components/project-schema";

interface UseCreateProjectProps {
  refetchProjects: () => void;
}

const useCreateProject = ({ refetchProjects }: UseCreateProjectProps) => {
  const { authToken } = useAuth();

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: { data: ProjectValues }) =>
      apis.createProject({ authToken, data }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Project created successfully",
      });
      refetchProjects();
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.response?.data?.message,
      });
    },
    retry: false,
  });

  return { isLoading, mutate };
};

export default useCreateProject;
