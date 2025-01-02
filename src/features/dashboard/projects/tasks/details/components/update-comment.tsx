import ReactQuill from "react-quill";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbEdit } from "react-icons/tb";

import { toast, useAuth } from "@/hooks";
import { Comment } from "@/types";
import { Button } from "@/components";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import apis from "../../apis";
import { LoaderCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface RequestData {
  data: {
    projectId: string;
    taskId: string;
    commentId: string;
    content: string;
  };
}

interface UpdateComment {
  comment: Comment;
  taskId: string;
  refetchTask: () => void;
}

const UpdateComment = ({ comment, taskId, refetchTask }: UpdateComment) => {
  const { projectId } = useParams();
  const { authToken } = useAuth();
  const [value, setValue] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setValue(comment.content);
  }, [comment]);

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: RequestData) =>
      apis.updateComment({ data, authToken }),
    onSuccess: () => {
      setOpen(false);
      refetchTask();
      toast({
        title: "Success",
        description: "Comment updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.response?.data?.message,
      });
    },
    retry: false,
  });

  const handleOnClick = () => {
    if (!value || value?.trim() === "<p><br></p>") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Content is required",
      });
      return;
    } else {
      const data = {
        taskId,
        projectId: projectId as string,
        content: value,
        commentId: comment._id,
      };
      mutate({ data });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="text-emerald-500 top-0 hover:text-emerald-500/80 flex items-center justify-center space-x-1"
        >
          <TbEdit />
          <span className="text-xs">Edit</span>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-active">Update Comment</SheetTitle>
        </SheetHeader>
        <Separator className="my-3" />
        <ReactQuill value={value} onChange={(value) => setValue(value)} />
        <div className="flex items-center justify-end mt-4">
          <Button
            size="sm"
            disabled={!value}
            variant="primary"
            onClick={handleOnClick}
          >
            {isLoading && <LoaderCircle />}
            <span>Update</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateComment;
