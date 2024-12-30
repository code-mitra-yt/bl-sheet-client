import { useState } from "react";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Member } from "@/types";
import MemberCard from "./member-card";
import AddMember from "./add-member";

interface AssignMemberProps {
  members: Member[];
  refetchTasks: () => void;
  projectId: string;
  taskId: string;
}

const AssignMember = ({
  members,
  refetchTasks,
  taskId,
  projectId,
}: AssignMemberProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-card size-6 flex items-center justify-center rounded-full"
        >
          <Plus size={15} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-active">Assign Members</SheetTitle>
        </SheetHeader>
        <Separator className="my-3" />
        <div className="sm:bg-active/10 sm:rounded-lg sm:border sm:border-active/10 sm:p-6 space-y-4">
          <AddMember
            taskId={taskId}
            projectId={projectId}
            refetchTasks={refetchTasks}
          />
          {members?.length > 0 ? (
            <div className="flex flex-col space-y-2">
              {members.map((member) => (
                <MemberCard
                  projectId={projectId}
                  taskId={taskId}
                  key={member._id}
                  member={member}
                  refetchTasks={refetchTasks}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center text-sm font-medium text-center">
              No members assigned to this task.
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AssignMember;
