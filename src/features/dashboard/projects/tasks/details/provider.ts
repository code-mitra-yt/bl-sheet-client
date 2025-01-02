import { Task } from "@/types";
import { createContext, useContext } from "react";

interface TaskContextProps {
  task: Task | null;
  refetchTask: () => void;
}

export const TaskContext = createContext<TaskContextProps>({
  task: null,
  refetchTask: () => {},
});

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("Task context not found");
  return context;
};
