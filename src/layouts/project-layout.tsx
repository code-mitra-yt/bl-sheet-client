import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router-dom";

import { QUERY } from "@/constants";
import { toast, useAuth } from "@/hooks";
import { Loader, ProjectHeader } from "@/components";
import apis from "@/features/dashboard/projects/apis";
import { ProjectContext } from "@/providers/project-provider";

const ProjectLayout = () => {
  const { authToken } = useAuth();
  const { projectId } = useParams();

  const {
    refetch,
    isLoading,
    data: response,
  } = useQuery({
    queryKey: [QUERY.PROJECT.GET_PROJECT, projectId],
    queryFn: () => apis.getProject({ params: { projectId }, authToken }),
    onError: (err: any) => {
      toast({
        title: "Error",
        description: err?.response?.data?.message,
        variant: "destructive",
      });
    },
    retry: false,
  });

  if (isLoading) return <Loader />;

  return (
    <ProjectContext.Provider
      value={{
        project: response?.data?.data?.project,
        refetchProject: refetch,
      }}
    >
      <div className="flex flex-col">
        <ProjectHeader />
        <div className="mt-3">
          <Outlet />
        </div>
      </div>
    </ProjectContext.Provider>
  );
};

export default ProjectLayout;
