import { SquareKanban } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
      <SquareKanban className="size-4 text-card" />
    </div>
  );
};

export default Logo;
