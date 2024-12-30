import { Trash2, LoaderCircle } from "lucide-react";
import { Button } from "@/components";

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
import useRemoveMember from "../hooks/use-remove-member";
import { useState } from "react";
import { Member } from "@/types";

interface MemberCardProps {
  member: Member;
  refetchTasks: () => void;
  taskId: string;
  projectId: string;
}

const MemberCard = ({
  member,
  refetchTasks,
  projectId,
  taskId,
}: MemberCardProps) => {
  const [open, setOpen] = useState(false);
  const { isLoading, mutate } = useRemoveMember({ refetchTasks });

  const handleRemove = () => {
    mutate({ data: { projectId, memberId: member._id, taskId } });
  };

  return (
    <div className="flex items-center justify-between px-2 py-1 bg-active/20 rounded-sm">
      <span className="text-active text-sm font-medium">{member.email}</span>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <button className="text-red-500 hover:text-red-500/80 transition-all">
            {false ? (
              <LoaderCircle className="animate-spin" size={15} />
            ) : (
              <Trash2 size={15} />
            )}
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Member?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove member?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <Button variant="destructive" onClick={handleRemove}>
              {isLoading && (
                <LoaderCircle className="ml-2 size-4 animate-spin" />
              )}
              <span> Remove</span>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MemberCard;
