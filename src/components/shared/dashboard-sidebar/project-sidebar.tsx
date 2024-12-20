import { Sidebar, SidebarRail } from "@/components/ui/sidebar";

import SidebarNav from "./sidebar-nav";
import SidebarUser from "./sidebar-user";
import Header from "./header";

const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <Header />
      <SidebarNav />
      <SidebarUser />
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
