import { useNavigate } from "react-router-dom";

import { MemberRole, Task } from "@/types";

import { Badge } from "@/components/ui/badge";
import { DottedSeparator } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import TaskComments from "./task-comments";
import DeleteTask from "../../components/delete-task";
import CreateOrUpdateTask from "../../components/create-update-task";
import { useProjectContext } from "../../../../../../providers/project-provider";

interface TaskInfoProps {
  task: Task;
  refetchTask: () => void;
}
const TaskInfo = ({ task, refetchTask }: TaskInfoProps) => {
  const navigate = useNavigate();
  const { project } = useProjectContext();

  if (!task) return null;

  return (
    <div className="col-span-4">
      <div className="mt-5 prose prose-stone !prose-sm max-w-full">
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted px-4 py-2 border-b space-y-2 sm:space-y-0 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="space-x-2 flex items-center">
              <Avatar className="size-7 bg-card">
                <AvatarImage src={task?.creator?.avatar?.url} alt="profile" />
                <AvatarFallback className="bg-card text-card text-sm">
                  {task?.creator?.fullName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-primary text-xs sm:text-sm">
                {task?.creator?.fullName}
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-center space-x-2">
              <div className="flex items-center">
                {
                  <Badge className="px-2 rounded-full bg-gray-200 text-gray-800">
                    {project?.role}
                  </Badge>
                }
              </div>
              {(project?.role !== MemberRole.MEMBER || task?.isCreator) && (
                <div className="flex items-center justify-center space-x-2">
                  <CreateOrUpdateTask
                    forUpdate={true}
                    task={task!}
                    taskId={task?._id}
                    projectId={project?.projectId!}
                    refetchTasks={refetchTask}
                  />
                  <DeleteTask
                    taskId={task?._id!}
                    projectId={project?.projectId!}
                    refetchTasks={() => {
                      navigate(
                        `/dashboard/projects/${project?.projectId}/tasks`
                      );
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <div
            className="p-5 !text-sm"
            dangerouslySetInnerHTML={{
              __html: task?.description ? task?.description : "",
            }}
          />
        </div>
      </div>

      <DottedSeparator className="my-5" color="#0096B7" />
      <TaskComments
        taskId={task?._id!}
        comments={task?.comments || []}
        refetchTasks={refetchTask}
      />
    </div>
  );
};

export default TaskInfo;
