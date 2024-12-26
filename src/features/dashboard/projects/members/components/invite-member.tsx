import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components";
import { useProjectContext } from "@/providers/project-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InviteMemberForm from "./invite-member-form";

export function InviteMember() {
  const { project } = useProjectContext();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-fit px-3 py-1.5 rounded-lg w-full sm:w-fit font-normal"
          onClick={() => setOpen(true)}
        >
          <Plus />
          <span>Invite</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-active mb-2">
            Invite member to {project?.name} project
          </DialogTitle>
          <DialogDescription>
            Enter the email address of the member you want to invite.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center w-full">
          <InviteMemberForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default InviteMember;
