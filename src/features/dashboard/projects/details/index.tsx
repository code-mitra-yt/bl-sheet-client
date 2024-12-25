import { GridEffect } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProjectContext } from "@/providers/project-provider";

const ProjectDetails = () => {
  const { project } = useProjectContext();
  return (
    <div className="bg-accent relative border p-4 rounded-lg overflow-hidden">
      <GridEffect />
      <h1 className="text-lg font-medium">{project?.name}</h1>
      <p className="text-sm mt-1 text-muted-foreground">
        {project?.description}
      </p>
      <div className="mt-2 flex items-center justify-end">
        <Avatar className="size-7">
          <AvatarImage src={project?.owner?.avatar?.url} alt="owner-profile" />
          <AvatarFallback className="bg-card font-medium border text-sm text-muted-foreground">
            {project?.owner?.fullName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="ml-2 text-sm font-medium text-muted-foreground">
          {project?.owner?.fullName}
        </span>
      </div>
    </div>
  );
};

export default ProjectDetails;
