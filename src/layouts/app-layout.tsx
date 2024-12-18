import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
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
