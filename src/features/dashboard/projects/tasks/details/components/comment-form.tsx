import { useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { LoaderCircle } from "lucide-react";

import { toast, useAuth } from "@/hooks";
import { cn } from "@/lib/utils";

import apis from "../../apis";

interface CommentForm {
  taskId: string;
  refetch: () => void;
}

const CommentForm = ({ taskId, refetch }: CommentForm) => {
  const { projectId } = useParams();
  const { authToken } = useAuth();
  const [value, setValue] = useState<string>();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ data }: any) =>
      apis.addComment({
        authToken,
        data,
      }),
    onSuccess: () => {
      refetch();
      toast({ title: "Comment added successfully" });
      setValue("");
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
    }

    const data = {
      taskId,
      projectId: projectId as string,
      content: value,
    };
    mutate({ data });
  };

  return (
    <div className="w-full space-y-2">
      <ReactQuill value={value} onChange={(value) => setValue(value.trim())} />
      <div className="flex items-center justify-end mt-2">
        <button
          disabled={!value}
          onClick={handleOnClick}
          className={cn(
            "ring-0 space-x-1 bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-600/70 rounded-md px-3 py-1 w-fit",
            (!value || value?.trim() === "<p><br></p>") &&
              "bg-emerald-600/50 cursor-not-allowed hover:bg-emerald-600/50"
          )}
        >
          {isLoading && <LoaderCircle className="animate-spin" size={15} />}
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
