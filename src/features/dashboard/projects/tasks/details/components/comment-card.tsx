import { formatDistance } from "date-fns";
import { useParams } from "react-router-dom";

import { Comment, MemberRole } from "@/types";
import { DottedSeparator } from "@/components";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useProjectContext } from "@/providers/project-provider";

import UpdateComment from "./update-comment";
import DeleteComment from "./delete-comment";

interface CommentCardProps {
  comment: Comment;
  refetchTask: () => void;
}

const CommentCard = ({ comment, refetchTask }: CommentCardProps) => {
  const { taskId } = useParams();
  const { project } = useProjectContext();

  return (
    <div>
      <DottedSeparator
        direction="vertical"
        className="h-6 px-6"
        color="#0096B7"
      />
      <div className="border rounded-md">
        <div className="bg-secondary flex items-center justify-between w-full px-3 border-b py-1 md:py-2">
          <div className="flex items-center justify-center space-x-1">
            <Avatar className="bg-primary !text-sm size-7">
              <AvatarFallback className="bg-primary text-card text-sm">
                {comment?.author?.user?.fullName[0]?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{comment?.author?.user?.fullName}</span>
          </div>
        </div>

        <div className="!text-sm px-6 md:px-8 prose py-1 md:py-2">
          <div dangerouslySetInnerHTML={{ __html: comment.content }} />
        </div>

        <div className="flex items-center justify-between px-6 md:px-8 border-t py-1">
          <div className="text-xs py-1 text-muted-foreground">
            {formatDistance(comment.createdAt, new Date())} ago
          </div>

          {(comment?.author?.isAuthor ||
            project?.role !== MemberRole.MEMBER) && (
            <div className="space-x-3 flex items-center">
              <UpdateComment
                comment={comment}
                taskId={taskId as string}
                refetchTask={refetchTask}
              />
              <DeleteComment
                taskId={taskId as string}
                refetchTask={refetchTask}
                commentId={comment._id}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
