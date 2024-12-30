import React, { useEffect, useState } from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Member } from "@/types";
import { useDebounce } from "@/hooks";

import useGetMembers from "../../members/hooks/use-get-members";
import useGetMemberFilters from "../../members/hooks/use-get-member-filters";
import useAssignMember from "../hooks/user-assign-member";

interface AddMember {
  projectId: string;
  taskId: string;
  refetchTasks: () => void;
}

const AddMember = ({ taskId, projectId, refetchTasks }: AddMember) => {
  const [open, setOpen] = React.useState(false);
  const { members } = useGetMembers();
  const { mutate } = useAssignMember({ refetchTasks });
  const { email, setFilters } = useGetMemberFilters();

  const [localSearch, setLocalSearch] = useState(email);
  const debouncedSearch = useDebounce(localSearch);

  useEffect(() => {
    setFilters({ email: debouncedSearch! });
  }, [debouncedSearch]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          Assign Members to Task
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:w-[420px] p-0">
        <Command>
          <CommandInput
            placeholder="Search members..."
            onChangeCapture={(e: any) => setLocalSearch(e.target?.value)}
          />
          <CommandList>
            <CommandEmpty>No member found</CommandEmpty>
            <CommandGroup>
              {members?.map((member: Member) => (
                <CommandItem
                  className="cursor-pointer"
                  key={member._id}
                  value={member._id}
                  onSelect={(currentValue) => {
                    mutate({
                      data: { memberId: currentValue, projectId, taskId },
                    });
                    setOpen(false);
                  }}
                >
                  {member.email}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default AddMember;
