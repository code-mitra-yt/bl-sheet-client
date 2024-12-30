import { useProjectContext } from "@/providers/project-provider";

import BoardView from "./components/board-view";
import useGetTasks from "./hooks/use-get-tasks";
import CreateTask from "./components/create-update-task";
import TaskFilters from "./components/task-filters";

const ProjectTasks = () => {
  const { project } = useProjectContext();
  const { tasks, refetch, isLoading } = useGetTasks();
  return (
    <div className="space-y-2">
      <div className="p-2 bg-muted border flex-col sm:flex-row rounded-lg flex gap-2 sm:items-center sm:justify-between">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-active font-medium truncate sm:w-[100px] lg:w-full">
            {project?.name}
          </h1>
        </div>

        <TaskFilters refetchTasks={refetch} projectId={project?.projectId!} />
      </div>
      <BoardView tasks={tasks} refetchTasks={refetch} isLoading={isLoading} />
    </div>
  );
};

export default ProjectTasks;
