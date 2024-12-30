import { SearchInput, SelectFilters } from "@/components";
import { TaskPriority } from "@/types";

import useGetTaskFilters from "../hooks/use-get-task-filters";
import { PRIORITY_OPTIONS } from "@/constants";
import CreateTask from "./create-update-task";

interface TaskFiltersProps {
  projectId: string;
  refetchTasks: () => void;
}

const TaskFilters = ({ projectId, refetchTasks }: TaskFiltersProps) => {
  const { title, setFilters, priority } = useGetTaskFilters();
  return (
    <div className="flex items-center sm:space-x-2 flex-col sm:flex-row gap-2">
      <SearchInput
        fn={(title?: string) => setFilters({ title })}
        text={title ? title : ""}
        placeholder="Filter tasks..."
      />

      <div className="flex items-center justify-center space-x-2 w-full">
        <SelectFilters
          fn={(value: TaskPriority) => setFilters({ priority: value })}
          title="Priority"
          selectedValue={priority ? priority : "All"}
          options={PRIORITY_OPTIONS}
        />
        <CreateTask projectId={projectId} refetchTasks={refetchTasks} />
      </div>
    </div>
  );
};

export default TaskFilters;
