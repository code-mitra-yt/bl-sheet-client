import { Navigate, Outlet } from "react-router-dom";
import { DashboardSidebar, ModeToggle, Loader } from "@/components";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/hooks/use-auth";
import { useSelf } from "@/hooks";

const DashboardLayout = () => {
  const { user, isAuth } = useAuth();
  const { isLoading } = useSelf();

  if (!isAuth) return <Navigate to="/auth/sign-in" />;
  if (isLoading) return <Loader />;

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full">
        <SidebarInset>
          <header className="flex h-16 shrink-0 px-4 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16 border-b w-full">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1 size-8" />
              <div className="flex items-center justify-center space-x-2">
                <Avatar className="size-7">
                  <AvatarImage src={user?.avatar?.url} alt="profile" />
                  <AvatarFallback className="bg-active text-white">
                    {user?.fullName[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-foreground text-sm font-medium">
                  {user?.fullName}
                </h1>
              </div>
            </div>
            <div>
              <ModeToggle />
            </div>
          </header>
          <div className="p-4">
            <Outlet />
          </div>
        </SidebarInset>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
