import { MemberRole } from "@/types";
import RemoveMember from "./remove-member";
import UpdateMember from "./update-member";

interface MemberActionsProps {
  projectId: string;
  memberId: string;
  refetchMembers: () => void;
  role: MemberRole;
}
const MemberActions = ({
  memberId,
  role,
  refetchMembers,
  projectId,
}: MemberActionsProps) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <UpdateMember
        role={role}
        memberId={memberId}
        projectId={projectId}
        refetchMember={refetchMembers}
      />
      <RemoveMember
        memberId={memberId}
        refetchMembers={refetchMembers}
        projectId={projectId}
      />
    </div>
  );
};

export default MemberActions;
