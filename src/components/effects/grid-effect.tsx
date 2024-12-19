import React from "react";
import { cn } from "@/lib/utils";

const GridEffect = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <div
      className={cn(
        "absolute z-0 inset-0 size-full bg-[size:14px_24px] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#A3A3A31d_1px,transparent_1px),linear-gradient(to_bottom,#A3A3A31d_1px,transparent_1px)]",
        className
      )}
      {...props}
    />
  );
};

export default GridEffect;
