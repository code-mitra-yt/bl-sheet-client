import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div data-wrapper="" className="border-border/40 dark:border-border">
      <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
