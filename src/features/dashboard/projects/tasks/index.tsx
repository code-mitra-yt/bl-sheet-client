import { Loader } from "@/components";
import { useProjectContext } from "@/providers/project-provider";

import BoardView from "./components/board-view";
import useGetTasks from "./hooks/use-get-tasks";
import CreateTask from "./components/create-update-task";

const ProjectTasks = () => {
  const { project } = useProjectContext();
  const { tasks, refetch, isLoading } = useGetTasks();
  if (isLoading) return <Loader />;
  return (
    <div className="space-y-2">
      <div className="p-2 bg-muted border flex-col sm:flex-row rounded-lg flex gap-2 sm:items-center sm:justify-between">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-active font-medium">{project?.name}</h1>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <CreateTask refetchTasks={refetch} projectId={project?.projectId!} />
        </div>
      </div>
      <BoardView tasks={tasks} refetchTasks={refetch} />
    </div>
  );
};

export default ProjectTasks;
