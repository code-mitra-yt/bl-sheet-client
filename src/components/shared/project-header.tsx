import { PanelsTopLeft, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";
import { MemberRole } from "@/types";
import { PROJECT_LINKS } from "@/constants";
import { useProjectContext } from "@/providers/project-provider";

const ProjectHeader = () => {
  const { project } = useProjectContext();

  return (
    <div className="flex items-center space-x-4 border-b">
      <NavLink
        to={`/dashboard/projects`}
        className={cn("flex items-center justify-center gap-2 pb-1.5")}
      >
        <PanelsTopLeft size={12} />
        <span className="text-sm hidden sm:block">Projects</span>
      </NavLink>

      {PROJECT_LINKS.map((link) => (
        <NavLink
          key={link.id}
          to={`/dashboard/projects/${project?.projectId}/${link.path}`}
          className={({ isActive }) =>
            cn(
              "flex items-center justify-center gap-2 pb-1.5",
              isActive && "text-active border-b-2 border-active"
            )
          }
        >
          <link.icon size={12} />
          <span className="text-sm hidden sm:block">{link.title}</span>
        </NavLink>
      ))}

      {project?.role === MemberRole.OWNER && (
        <NavLink
          to={`/dashboard/projects/${project?.projectId}/settings`}
          className={cn("flex items-center justify-center gap-2 pb-1.5")}
        >
          <Settings size={12} />
          <span className="text-sm hidden sm:block">Settings</span>
        </NavLink>
      )}
    </div>
  );
};

export default ProjectHeader;
