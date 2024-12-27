import { useNavigate } from "react-router-dom";
import { SquareKanban } from "lucide-react";
import { SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { siteConfigs } from "@/configs";
import { cn } from "@/lib/utils";

const NavHeader = () => {
  const { open } = useSidebar();
  const navigate = useNavigate();

  return (
    <SidebarHeader
      onClick={() => navigate("/")}
      className="cursor-pointer h-16 flex items-center justify-center"
    >
      <div className={cn("flex items-center", open && "space-x-4")}>
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary">
          <SquareKanban className="size-4 text-card" />
        </div>
        <div className="grid flex-1 text-left text-lg leading-tight">
          <span className="truncate font-semibold text-primary">
            {siteConfigs.name.toUpperCase()}
          </span>
        </div>
      </div>
    </SidebarHeader>
  );
};

export default NavHeader;
