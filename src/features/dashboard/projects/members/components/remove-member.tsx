import { CircleMinus, LoaderCircle } from "lucide-react";
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
import { useState } from "react";
import { Button } from "@/components";
import { useMutation } from "react-query";
import apis from "../apis";
import { toast, useAuth } from "@/hooks";

interface RemoveMemberProps {
  projectId: string;
  memberId: string;
  refetchMembers: () => void;
}

const RemoveMember = ({
  refetchMembers,
  projectId,
  memberId,
}: RemoveMemberProps) => {
  const { authToken } = useAuth();
  const [open, setOpen] = useState(false);

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: { data: { projectId: string; memberId: string } }) =>
      apis.removeMember({ authToken, data }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Member removed successfully",
      });
      refetchMembers();
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
    mutate({ data: { projectId, memberId } });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="text-red-500 hover:text-red-500/80 transition-all"
        >
          <CircleMinus size={15} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove Member?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to remove this member from the project?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <Button variant="destructive" onClick={handleRemove}>
            {isLoading && <LoaderCircle className="ml-2 size-4 animate-spin" />}
            <span> Remove</span>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveMember;
