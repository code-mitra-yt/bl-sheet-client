import { cn } from "@/lib/utils";
import { Loader } from "@/components";
import { Task, TaskStatus } from "@/types";
import { useSidebar } from "@/components/ui/sidebar";
import { AvailableTaskStatus, STATUS_TEXT_WITH_ICON } from "@/constants";

import TaskCard from "./task-card";

interface BoardViewProps {
  tasks: Task[];
  refetchTasks: () => void;
  isLoading: boolean;
}

const BoardView = ({ tasks, refetchTasks, isLoading }: BoardViewProps) => {
  const { open, isMobile } = useSidebar();
  if (isLoading) return <Loader />;
  return (
    <div
      className={cn(
        "overflow-x-auto flex space-x-3",
        open ? "w-[calc(100vw_-260px)]" : "w-[calc(100vw_-80px)]",
        isMobile && "w-full"
      )}
    >
      {AvailableTaskStatus.map((status) => {
        const filteredTasks = tasks.filter((task) => task.status === status);
        return (
          <div key={status} className="space-y-3">
            <h1 className="text-primary font-medium w-[330px] border-b p-2 space-x-2">
              <span>{STATUS_TEXT_WITH_ICON[status as TaskStatus]}</span>
              <span className="bg-active rounded-full px-3 text-white">
                {filteredTasks.length}
              </span>
            </h1>
            <div className="overflow-y-auto flex flex-col space-y-3 h-[calc(100vh_-255px)] pb-5">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  refetchTasks={refetchTasks}
                  task={task}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BoardView;
