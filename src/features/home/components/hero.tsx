import { GridEffect } from "@/components";
import { siteConfigs } from "@/configs";

import { BadgeDollarSign, PanelsTopLeft, SquareCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative pt-4 pb-8 sm:pb-16 sm:pt-10 px-4 sm:px-8 mx-auto">
      <GridEffect />
      <div className="relative flex items-center justify-center flex-col sm:block sm:container z-[10]">
        <p className="text-md">
          Welcome to <span className="text-active">{siteConfigs.name}</span>{" "}
        </p>

        <h1 className="text-center sm:text-start text-2xl sm:text-2xl md:text-4xl xl:text-5xl font-bold mt-8 bg-gradient-to-r from-active/70 via-active/90 to-active inline-block text-transparent bg-clip-text">
          Simplifying Project Management
        </h1>

        <p className="text-sm mt-2 text-muted-foreground text-center sm:text-start">
          BL Sheet is your ultimate tool for managing projects effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-4">
          <div className="flex items-center space-x-2 text-foreground text-sm">
            <PanelsTopLeft size={18} />
            <span>Project Management</span>
          </div>

          <div className="border-l border-foreground h-[10px] hidden sm:block" />

          <div className="flex items-center space-x-2 text-foreground text-sm">
            <SquareCheckBig size={18} />
            <span>Task Management</span>
          </div>

          <div className="border-l border-foreground h-[10px] hidden sm:block" />

          <div className="flex items-center space-x-2 text-foreground text-sm">
            <BadgeDollarSign size={18} />
            <span>Budget Management</span>
          </div>
        </div>

        <div className="space-x-3 flex items-center mt-4 z-50">
          <Link
            to=""
            className="inline-flex text-white items-center rounded-full  px-5 py-2 text-sm font-light bg-active hover:bg-active/80 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
