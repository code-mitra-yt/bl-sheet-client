import RemoveMember from "./remove-member";
import UpdateMember from "./update-member";

interface MemberActionsProps {
  projectId: string;
  memberId: string;
  refetchMembers: () => void;
}
const MemberActions = ({
  memberId,
  refetchMembers,
  projectId,
}: MemberActionsProps) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <UpdateMember />
      <RemoveMember
        memberId={memberId}
        refetchMembers={refetchMembers}
        projectId={projectId}
      />
    </div>
  );
};

export default MemberActions;
