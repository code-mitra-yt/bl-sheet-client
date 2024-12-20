import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { CheckCircle, House, PanelsTopLeft, Settings2 } from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";

const navMain = [
  {
    id: 1,
    title: "Home",
    url: "/dashboard/home",
    icon: House,
  },
  {
    id: 2,
    title: "Todos",
    url: "/dashbaord/todos",
    icon: CheckCircle,
  },
  {
    id: 3,
    title: "Projects",
    url: "/dashbaord/projects",
    icon: PanelsTopLeft,
  },
  {
    id: 4,
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings2,
  },
];

const NavMain = () => {
  const { open, isMobile } = useSidebar();
  return (
    <SidebarContent>
      <SidebarGroup className="space-y-1">
        {navMain.map((item) => (
          <SidebarMenu key={item.id}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-2 hover:bg-muted p-3 rounded-lg text-foreground",
                  isActive && "bg-muted text-active"
                )
              }
            >
              <item.icon size={15} />
              <span className={cn("text-sm", !open && !isMobile && "hidden")}>
                {item.title}
              </span>
            </NavLink>
          </SidebarMenu>
        ))}
      </SidebarGroup>
    </SidebarContent>
  );
};

export default NavMain;
