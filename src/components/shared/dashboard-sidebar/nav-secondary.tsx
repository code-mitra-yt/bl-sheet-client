import { cn } from "@/lib/utils";
import { CircleUserRound, LogOut } from "lucide-react";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

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
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className={cn(
              "flex items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
              !open && !isMobile && "justify-center"
            )}
          >
            <CircleUserRound size={open ? 20 : 15} />
            <span className={cn(!open && !isMobile && "hidden")}>Profile</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className={cn(
              "flex items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
              !open && !isMobile && "justify-center"
            )}
          >
            <LogOut size={open ? 20 : 15} />
            <span className={cn(!open && !isMobile && "hidden")}>Logout</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default NavSecondary;
