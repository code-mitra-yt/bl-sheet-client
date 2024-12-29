import { useState } from "react";
import { useMutation } from "react-query";
import { Trash2, LoaderCircle } from "lucide-react";
import { Button } from "@/components";
import { toast, useAuth } from "@/hooks";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import apis from "../apis";

interface DeleteTaskProps {
  taskId: string;
  projectId: string;
  refetchTasks: () => void;
}

const DeleteTask = ({ refetchTasks, projectId, taskId }: DeleteTaskProps) => {
  const { authToken } = useAuth();
  const [open, setOpen] = useState(false);

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: { data: { projectId: string; taskId: string } }) =>
      apis.deleteTask({ authToken, data }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Task deleted successfully",
      });
      refetchTasks();
    },
    onError: (err: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: err?.response?.data?.message,
      });
    },
    retry: false,
  });

  const handleRemove = () => {
    mutate({ data: { projectId, taskId } });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="text-red-500 hover:text-red-500/80 transition-all"
        >
          <Trash2 size={15} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Task?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this task?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <Button variant="destructive" onClick={handleRemove}>
            {isLoading && <LoaderCircle className="ml-2 size-4 animate-spin" />}
            <span> Delete</span>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTask;
