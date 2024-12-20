import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { CircleUserRound, LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  SidebarFooter,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";

const NavSecondary = () => {
  const { open, isMobile } = useSidebar();
  return (
    <SidebarFooter>
      <div className={cn("bg-active p-4 rounded-md", !open && "hidden")}>
        <h1 className="text-white font-medium mb-2">Free Plan</h1>
        <ul className="list-disc ml-6 text-white text-sm">
          <li>1 Project </li>
          <li>5 Members</li>
        </ul>
      </div>
      <Separator />
      <SidebarMenu>
        <NavLink
          to={"/dashboard/profile"}
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 hover:bg-muted p-2 rounded-lg text-foreground",
              isActive && "bg-muted text-active"
            )
          }
        >
          <CircleUserRound size={!open ? 15 : 15} />
          <span className={cn("text-sm", !open && !isMobile && "hidden")}>
            Profile
          </span>
        </NavLink>
        <button
          className={cn(
            "flex items-center space-x-2 hover:bg-muted p-2 rounded-lg text-foreground"
          )}
        >
          <LogOut size={!open ? 15 : 15} />
          <span className={cn("text-sm", !open && !isMobile && "hidden")}>
            Logout
          </span>
        </button>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default NavSecondary;
