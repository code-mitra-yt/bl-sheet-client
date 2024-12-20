import { useNavigate } from "react-router-dom";
import { SquareKanban } from "lucide-react";
import { SidebarHeader } from "@/components/ui/sidebar";
import { siteConfigs } from "@/configs";

const Header = () => {
  const navigate = useNavigate();
  return (
    <SidebarHeader onClick={() => navigate("/")} className="cursor-pointer">
      <div className="py-3 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center space-x-2">
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-active text-sidebar-primary-foreground">
          <SquareKanban className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-lg leading-tight">
          <span className="truncate font-semibold text-active">
            {siteConfigs.name}
          </span>
        </div>
      </div>
    </SidebarHeader>
  );
};

export default Header;
