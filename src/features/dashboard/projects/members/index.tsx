import MemberTable from "./components/member-table";
import MemberFilters from "./components/member-filters";
import useGetMembers from "./hooks/use-get-members";
import { Pagination } from "@/components";
import useGetMemberFilters from "./hooks/use-get-member-filters";

const ProjectMembers = () => {
  const { page = 1, limit = 10, setFilters } = useGetMemberFilters();
  const {
    members,
    isLoading,
    total,
    hasNextPage,
    hasPrevPage,
    totalPages,
    refetch,
  } = useGetMembers();

  return (
    <div className="space-y-2">
      <div className="p-2 bg-muted border flex-col sm:flex-row rounded-lg flex gap-2 sm:items-center sm:justify-between">
        <div>
          <span className="text-base md:text-lg ">Team Members</span>{" "}
          <span className="bg-active text-white rounded-xl sm:px-2 px-4 md:px-4 text-xs md:text-sm py-1">
            {total}
          </span>
        </div>
        <div className="flex items-center sm:space-x-2 flex-col sm:flex-row gap-2">
          <MemberFilters refetchMembers={refetch} />
        </div>
      </div>
      <MemberTable
        members={members}
        isLoading={isLoading}
        refetchMembers={refetch}
      />
      <div className="pt-3">
        <Pagination
          setFilters={setFilters}
          page={page}
          limit={limit}
          totalPages={totalPages}
          hasNextPage={!hasNextPage}
          hasPrevPage={!hasPrevPage}
        />
      </div>
    </div>
  );
};

export default ProjectMembers;
