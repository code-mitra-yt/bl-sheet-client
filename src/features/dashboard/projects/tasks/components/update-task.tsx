import { Task } from "@/types";
import { Edit } from "lucide-react";

interface UpdateTaskProps {
  refetchTasks: () => void;
  task: Task;
}

const UpdateTask = ({}: UpdateTaskProps) => {
  return (
    <button className="text-green-500 hover:text-green-500/80 transition-all">
      <Edit size={15} />
    </button>
  );
};

export default UpdateTask;
