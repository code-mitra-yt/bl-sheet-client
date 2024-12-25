import { Project } from "./../types";
import { createContext, useContext } from "react";

interface ProjectContext {
  project: Project | null;
  refetchProject: () => void;
}

export const ProjectContext = createContext<ProjectContext>({
  project: null,
  refetchProject: () => {},
});

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context || !context.project)
    throw new Error("Project context not found");
  return context;
};
