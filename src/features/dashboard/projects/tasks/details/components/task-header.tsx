import { format } from "date-fns";
import { TiTime } from "react-icons/ti";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TASK_STATUS_COLOR, TASK_TYPE_COLOR } from "@/constants";

import { Task } from "@/types";

interface TaskHeaderProps {
  task: Task;
}

const TaskHeader = ({ task }: TaskHeaderProps) => {
  if (!task) return null;
  return (
    <div className="border-b border-active pb-2">
      <div className="flex space-y-1 sm:space-y-0 sm:items-center sm:justify-between flex-col sm:flex-row">
        <div className="flex items-center space-x-2">
          <Badge
            className={cn("rounded-full px-3", TASK_TYPE_COLOR[task?.taskType])}
          >
            {task?.taskType}
          </Badge>

          <Badge className="rounded-full px-3">Task #{task?.taskNumber}</Badge>
        </div>

        <div className={cn("flex items-center space-x-1")}>
          <div className="flex space-x-1 text-sm items-center">
            <TiTime />
            <span className="text-sm">Due date:</span>
            <span className="text-sm">
              {format(task?.dueDate, "do LLL yyyy")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 my-2 flex-col sm:flex-row">
        <h1 className="text-active font-medium text-[15px] lg:text-[17px]">
          {task?.title}
        </h1>
        <div>
          <Badge
            className={cn(
              TASK_STATUS_COLOR[task?.status],
              "w-[120px] flex items-center justify-center"
            )}
          >
            {task.status}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
