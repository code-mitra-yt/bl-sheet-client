import moment from "moment";
import { useNavigate } from "react-router-dom";
import { MessageSquareText, TimerOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { MemberRole, Task } from "@/types";
import { Badge } from "@/components/ui/badge";
import { useProjectContext } from "@/providers/project-provider";
import { TASK_LEVLE, TASK_PRIORITY_COLOR, TASK_TYPE_COLOR } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import AssignMember from "./assign-member";
import UpdateTask from "./create-update-task";
import DeleteTask from "./delete-task";
import ChangeStatus from "./change-status";

interface TaskCardProps {
  task: Task;
  refetchTasks: () => void;
}

const TaskCard = ({ task, refetchTasks }: TaskCardProps) => {
  const navigate = useNavigate();
  const { project } = useProjectContext();

  const redirectToTask = () => {
    const url = `/dashboard/projects/${project?.projectId}/tasks/${task._id}`;
    navigate(url);
  };

  return (
    <div
      className={cn(
        "border w-[330px] rounded-lg min-h-fit shadow-sm bg-muted/50 overflow-hidden"
      )}
    >
      <div className="p-3 border-b">
        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <Badge
              className={cn(
                "rounded-full px-3",
                TASK_TYPE_COLOR[task.taskType]
              )}
            >
              {task.taskType}
            </Badge>
            <Badge className="rounded-full px-3 bg-active/10 text-active">
              Task #{task.taskNumber}
            </Badge>
          </div>

          {project?.role !== MemberRole.MEMBER ? (
            <div className="flex items-center space-x-2">
              <UpdateTask
                projectId={task.projectId}
                forUpdate={true}
                refetchTasks={refetchTasks}
                task={task}
                taskId={task._id}
              />
              <DeleteTask
                taskId={task._id}
                projectId={task.projectId}
                refetchTasks={refetchTasks}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="mt-2 cursor-pointer" onClick={redirectToTask}>
          <h1 className="text-[13px] font-[450] text-foregorund transition-all">
            {task.title}
          </h1>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <Badge className={TASK_PRIORITY_COLOR[task.priority]}>
              {task.priority.toUpperCase()}
            </Badge>
          </div>

          <div className="space-x-1 flex items-center">
            <Avatar className="bg-primary text-card size-6">
              <AvatarImage src={task.creator?.avatar?.url} alt="profile" />
              <AvatarFallback className="bg-primary text-card text-sm">
                {task?.creator?.fullName[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-foreground">
              {task?.creator?.fullName}
            </span>
          </div>
        </div>

        {project?.role !== MemberRole.MEMBER ? (
          <div className="pt-5">
            <ChangeStatus
              refetch={refetchTasks}
              value={task.status}
              taskId={task._id}
              level={[0, 4]}
            />
          </div>
        ) : task.isMember ? (
          <div className="pt-5">
            <ChangeStatus
              refetch={refetchTasks}
              value={task.status}
              taskId={task._id}
              level={TASK_LEVLE[task.status]}
            />
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between p-3 border-t-foreground/20">
        <div className="flex items-center">
          {task.members.map((member) => (
            <Avatar className="bg-primary text-card size-6" key={member._id}>
              <AvatarFallback className="bg-primary text-card size-6 text-sm">
                {member.email[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}

          {project?.role !== MemberRole.MEMBER && (
            <AssignMember
              taskId={task._id}
              projectId={task.projectId}
              members={task.members}
              refetchTasks={refetchTasks}
            />
          )}
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className={cn("flex items-center space-x-1 text-xs")}>
            <span className="text-xs">
              <TimerOff size={15} />
            </span>
            <span className="text-xs">
              {moment(task.dueDate).format("MMM Do YY")}
            </span>
          </div>
          <div className="text-card-foreground flex items-center justify-center space-x-[2px]">
            <MessageSquareText className="size-4" />
            <span className="text-sm">{task.commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
