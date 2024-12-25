import { Loader } from "@/components";
import useGetProjects from "./hooks/use-get-projects";
import TableView from "./components/table-view";
import CreateProject from "./components/create-project";

const Projects = () => {
  const { isLoading, projects, refetch } = useGetProjects();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-medium">Your Projects</h1>
        <div className="flex items-center justify-center space-x-2">
          <CreateProject refetchProjects={refetch} />
        </div>
      </div>
      <div className="mt-4">
        <TableView projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
