import { useParams } from "react-router-dom";
import { Loader, BackButton } from "@/components";

import TaskHeader from "./components/task-header";
import TaskInfo from "./components/task-info";
import TaskCard from "./components/task-card";
import useGetTask from "./hooks/use-get-task";

const TaskDetails = () => {
  const { taskId, projectId } = useParams();

  const { isLoading, task, refetch } = useGetTask({
    taskId: taskId as string,
    projectId: projectId as string,
  });
  if (isLoading) return <Loader />;

  return (
    <div className="relative">
      <div className="pb-5 scroll-smooth">
        <div className="absolute top-0 left-0 hidden sm:block">
          <BackButton title="" url={`/dashboard/projects/${projectId}/tasks`} />
        </div>

        <div className="sm:px-6 sm:w-[95%] mx-auto overflow-y-auto h-[calc(100vh_-160px)]">
          <TaskHeader task={task} />
          <div className="space-y-5 md:grid grid-cols-6 md:gap-6">
            <TaskInfo task={task} refetchTask={refetch} />
            <TaskCard task={task} refetchTask={refetch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
