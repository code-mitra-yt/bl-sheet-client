import { Comment } from "@/types";
import { DottedSeparator } from "@/components";

import CommentForm from "./comment-form";
import CommentCard from "./comment-card";

interface TaskCommentsProps {
  taskId: string;
  refetchTasks: () => void;
  comments: Comment[];
}
const TaskComments = ({
  taskId,
  refetchTasks,
  comments,
}: TaskCommentsProps) => {
  return (
    <div className="relative">
      <h1 className="text-sm font-medium text-active">Disscussions</h1>
      {comments.map((comment) => (
        <CommentCard comment={comment} refetchTask={refetchTasks} />
      ))}
      <DottedSeparator className="my-6" color="#0096B7" />
      <CommentForm taskId={taskId} refetch={refetchTasks} />
    </div>
  );
};

export default TaskComments;
