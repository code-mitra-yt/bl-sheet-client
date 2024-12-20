import { Sidebar, SidebarRail } from "@/components/ui/sidebar";

import NavMain from "./nav-main";
import NavSecondary from "./nav-secondary";
import NavHeader from "./nav-header";
import { Separator } from "@/components/ui/separator";

const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <NavHeader />
      <Separator />
      <NavMain />
      <NavSecondary />
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
