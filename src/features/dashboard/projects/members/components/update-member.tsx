import { Edit } from "lucide-react";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import UpdateRoleForm from "./update-role-form";
import { MemberRole } from "@/types";

interface UpdateMemberProps {
  refetchMember: () => void;
  memberId: string;
  projectId: string;
  role: MemberRole;
}

const UpdateMember = ({
  memberId,
  projectId,
  role,
  refetchMember,
}: UpdateMemberProps) => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button className="text-green-500 hover:text-green-500/80 transition-all">
          <Edit size={15} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-active">
            Update Member Role
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-sm">
          Update the role of the selected member. Please note that changing the
          role will also affect their access to the project.
        </AlertDialogDescription>
        <UpdateRoleForm
          role={role}
          onClose={() => setOpen(false)}
          memberId={memberId}
          projectId={projectId}
          refetchMember={refetchMember}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateMember;
