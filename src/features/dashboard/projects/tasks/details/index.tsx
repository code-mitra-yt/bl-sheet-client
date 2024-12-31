import { Loader } from "@/components";
import { useParams } from "react-router-dom";
import useGetTask from "./hooks/use-get-task";
import { TaskContext } from "./provider";
import BackButton from "@/components/shared/back-button";
import TaskHeader from "./components/task-header";
import TaskInfo from "./components/task-info";
import TaskCard from "./components/task-card";

const TaskDetails = () => {
  const { taskId, projectId } = useParams();

  const { isLoading, task, refetch } = useGetTask({
    taskId: taskId as string,
    projectId: projectId as string,
  });
  if (isLoading) return <Loader />;

  return (
    <TaskContext.Provider value={{ task, refetchTask: refetch }}>
      <div className="relative">
        <div className="pb-5 scroll-smooth">
          <div className="absolute top-0 left-0 hidden sm:block">
            <BackButton
              title=""
              url={`/dashboard/projects/${projectId}/tasks`}
            />
          </div>

          <div className="sm:px-6 sm:w-[95%] mx-auto">
            <TaskHeader />
            <div className="space-y-5 md:grid grid-cols-6 md:space-x-8">
              <TaskInfo />
              <TaskCard />
            </div>
          </div>
        </div>
      </div>
    </TaskContext.Provider>
  );
};

export default TaskDetails;
