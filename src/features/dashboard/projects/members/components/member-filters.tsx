import { SearchInput, SelectFilters } from "@/components";
import { InvitationStatus } from "@/types";

import useGetMemberFilters from "../hooks/use-get-member-filters";
import InviteMember from "./invite-member";

const options = [
  { value: "All", label: "All" },
  { value: InvitationStatus.ACCEPTED, label: InvitationStatus.ACCEPTED },
  { value: InvitationStatus.PENDING, label: InvitationStatus.PENDING },
  { value: InvitationStatus.REJECTED, label: InvitationStatus.REJECTED },
];

const MemberFilters = () => {
  const { email, invitationStatus, setFilters } = useGetMemberFilters();

  return (
    <>
      <SearchInput
        fn={(email?: string) => setFilters({ email })}
        text={email!}
        placeholder="Filter members..."
      />
      <div className="flex items-center gap-2 w-full">
        <SelectFilters
          fn={(value: InvitationStatus) =>
            setFilters({ invitationStatus: value })
          }
          title="Status"
          selectedValue={invitationStatus}
          options={options}
        />
        <InviteMember />
      </div>
    </>
  );
};

export default MemberFilters;
