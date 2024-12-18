import { SiteFooter, SiteHeader } from "@/components";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="border-grid flex flex-1 flex-col">
      <SiteHeader />
      <div className="flex flex-1 flex-col min-h-screen">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
};

export default AppLayout;
