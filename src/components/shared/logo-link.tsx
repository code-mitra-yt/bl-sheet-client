import { NavLink } from "react-router-dom";
import { SquareKanban } from "lucide-react";
import { siteConfigs } from "@/configs";

const LogoLink = () => {
  return (
    <NavLink to="/" className="flex items-center justify-center space-x-4">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-active text-sidebar-primary-foreground">
        <SquareKanban className="size-4" />
      </div>
      <div className="sm:grid flex-1 text-left text-lg leading-tight hidden">
        <span className="truncate font-semibold text-active">
          {siteConfigs.name.toUpperCase()}
        </span>
      </div>
    </NavLink>
  );
};

export default LogoLink;
