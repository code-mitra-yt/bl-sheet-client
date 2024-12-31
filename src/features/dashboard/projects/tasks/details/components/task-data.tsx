import { Badge } from "lucide-react";

import { MemberRole } from "@/types";
import { TASK_PRIORITY_COLOR } from "@/constants";
import { useProjectContext } from "@/providers/project-provider";

import { useTaskContext } from "../provider";
import AssignMember from "../../components/assign-member";

const TaskData = () => {
  const { task, refetchTask } = useTaskContext();
  const { project } = useProjectContext();

  if (!task) return null;

  return (
    <div className="space-y-3 w-full col-span-2">
      <div className="space-y-2 p-3 rounded-lg bg-gray-100 border border-gray-200 shadow-sm h-fit w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-primary text-sm font-bold">Assingees</h1>
          {project?.role !== MemberRole.MEMBER && (
            <AssignMember
              projectId={project?.projectId!}
              members={task.members}
              taskId={task._id}
              refetchTasks={refetchTask}
            />
          )}
        </div>

        <div className="flex items-center"></div>
      </div>

      <div className="space-y-2 p-3 rounded-lg bg-gray-100 border border-gray-200 shadow-sm h-fit w-full">
        <h1 className="text-primary text-sm font-bold">Priority</h1>
        <div className="flex items-center">
          <Badge className={TASK_PRIORITY_COLOR[task.priority]}>
            {task.priority}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default TaskData;
