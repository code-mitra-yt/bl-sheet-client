import { NavLink } from "react-router-dom";
import { SquareKanban } from "lucide-react";
import { siteConfigs } from "@/configs";

const LogoLink = () => {
  return (
    <NavLink
      to="/"
      className="flex items-center justify-center space-x-2 text-primary"
    >
      <SquareKanban size={30} strokeWidth={2.5} />
      <h1 className="font-semibold text-xl">
        {siteConfigs.name.toUpperCase()}
      </h1>
    </NavLink>
  );
};

export default LogoLink;
